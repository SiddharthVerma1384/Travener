import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import {
  getDepartureCompatibility,
  isOfferEligibleForRequest,
  normalizeLocation,
  SHAREABLE_RIDE_MODES
} from "../utils/travel-matching.js";

export const createCompanionRequest = asyncHandler(async (req, res) => {
    const senderId = req.user?.id;
    const { travelRequestId, offerId } = req.body;

    // 1. Validate authenticated user and required input.
    if (!senderId) {
        throw new ApiError(401, "Authentication required.");
    }

    if (!travelRequestId || !offerId) {
        throw new ApiError(
            400,
            "travelRequestId and offerId are required."
        );
    }

    const now = new Date();

    // 2. Fetch both records concurrently.
    const [travelRequest, offer] = await Promise.all([
        prisma.travelRequest.findUnique({
            where: { id: travelRequestId }
        }),
        prisma.travelOffer.findUnique({
            where: { id: offerId }
        })
    ]);

    if (!travelRequest || !offer) {
        throw new ApiError(
            404,
            "Travel request or offer not found."
        );
    }

    if (!SHAREABLE_RIDE_MODES.includes(offer.transportMode)) {
        throw new ApiError(409, "This offer uses a ride mode that is no longer available for sharing.");
    }

    // 3. Reject inactive, expired, or departed trips.
    if (
        !travelRequest.isActive ||
        !offer.isActive ||
        travelRequest.expiresAt <= now ||
        offer.expiresAt <= now ||
        travelRequest.departureAt <= now ||
        offer.departureAt <= now
    ) {
        throw new ApiError(
            409,
            "This match is no longer available."
        );
    }

    // 4. The request owner and offer owner must differ.
    if (travelRequest.userId === offer.ownerId) {
        throw new ApiError(
            400,
            "You cannot create a companion request for your own trip."
        );
    }

    // 5. Either participant can initiate the request.
    const senderOwnsRequest =
        travelRequest.userId === senderId;

    const senderOwnsOffer =
        offer.ownerId === senderId;

    if (senderOwnsRequest === senderOwnsOffer) {
        throw new ApiError(
            403,
            "You must own either the travel request or the travel offer."
        );
    }

    const recipientId = senderOwnsRequest
        ? offer.ownerId
        : travelRequest.userId;

    // 6. Validate route compatibility.
    if (
        normalizeLocation(travelRequest.source) !== normalizeLocation(offer.source) ||
        normalizeLocation(travelRequest.destination) !== normalizeLocation(offer.destination)
    ) {
        throw new ApiError(
            400,
            "The travel request and offer have incompatible routes."
        );
    }

    // 7. Departure times must be within the fixed 30-minute matching window.
    const departureCompatibility = getDepartureCompatibility(travelRequest, offer);
    if (!departureCompatibility.compatible) {
        throw new ApiError(
            400,
            `Departure times differ by ${Math.round(departureCompatibility.differenceMinutes)} minutes, beyond the ${departureCompatibility.toleranceMinutes}-minute matching window.`
        );
    }

    // 8. Match transport mode when one was specified.
    if (
        travelRequest.transportMode &&
        travelRequest.transportMode !== offer.transportMode
    ) {
        throw new ApiError(
            400,
            "Transport modes do not match."
        );
    }

    // 9. Check available seats without allocating them yet.
    if (
        offer.availableSeats < travelRequest.passengersRequired
    ) {
        throw new ApiError(
            409,
            "Not enough seats are available."
        );
    }

    if (!isOfferEligibleForRequest(travelRequest, offer, now)) {
        throw new ApiError(409, "This offer is no longer compatible with the travel request.");
    }

    // 10. Deadline = earlier of 30 minutes from now
    // or one hour before the offer's departure.
    const responseDeadline = new Date(
        now.getTime() + 30 * 60 * 1000
    );

    const chatDeadline = new Date(
        offer.departureAt.getTime() - 60 * 60 * 1000
    );

    const expiresAt = new Date(
        Math.min(
            responseDeadline.getTime(),
            chatDeadline.getTime()
        )
    );

    if (expiresAt <= now) {
        throw new ApiError(
            409,
            "There is insufficient time to respond to this request."
        );
    }

    // 11. Reject duplicate, unexpired pending requests.
    let companionRequest;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        companionRequest = await prisma.$transaction(async (transaction) => {
          const [currentRequest, currentOffer] = await Promise.all([
            transaction.travelRequest.findUnique({ where: { id: travelRequestId } }),
            transaction.travelOffer.findUnique({ where: { id: offerId } })
          ]);
          if (
            !currentRequest ||
            !currentOffer ||
            !currentRequest.isActive ||
            !currentOffer.isActive ||
            currentRequest.expiresAt <= now ||
            currentOffer.expiresAt <= now ||
            currentRequest.departureAt <= now ||
            currentOffer.departureAt <= now ||
            !isOfferEligibleForRequest(currentRequest, currentOffer, now)
          ) {
            throw new ApiError(409, "This match is no longer available.");
          }

          const existingRequest = await transaction.companionRequest.findFirst({
            where: {
              travelRequestId,
              offerId,
              status: "PENDING",
              expiresAt: { gt: now }
            },
            select: { id: true, status: true, expiresAt: true, createdAt: true }
          });
          if (existingRequest) {
            throw new ApiError(
              409,
              "A pending companion request already exists for this match.",
              [{ existingCompanionRequest: existingRequest }]
            );
          }

          return transaction.companionRequest.create({
            data: {
              senderId,
              recipientId,
              travelRequestId,
              offerId,
              status: "PENDING",
              expiresAt
            }
          });
        }, { isolationLevel: "Serializable" });
        break;
      } catch (error) {
        if (error instanceof ApiError) throw error;
        if (error.code === "P2034" && attempt < 2) continue;
        throw error;
      }
    }

    // 13. Return the standard API response.
    return res.status(201).json(
        new ApiResponse(
            201,
            { companionRequest },
            "Companion request sent successfully."
        )
    );
});

export const getCompanionRequests = asyncHandler(async (req, res) => {
  const requests = await prisma.companionRequest.findMany({
    where: { OR: [{ senderId: req.user.id }, { recipientId: req.user.id }] },
    orderBy: { createdAt: "desc" },
    include: {
      sender: { select: { id: true, name: true } },
      recipient: { select: { id: true, name: true } },
      travelRequest: { select: { id: true, source: true, destination: true, departureAt: true, passengersRequired: true } },
      offer: { select: { id: true, source: true, destination: true, departureAt: true, transportMode: true, availableSeats: true } }
    }
  });

  const now = new Date();
  const displayRequests = requests.map((request) => ({
      ...request,
      status: request.status === "PENDING" && request.expiresAt <= now
        ? "EXPIRED"
        : request.status,
      departureCompatibility: getDepartureCompatibility(request.travelRequest, request.offer)
    }));

  return res.status(200).json(new ApiResponse(200, displayRequests, "Companion requests fetched successfully"));
});

export const respondToCompanionRequest = asyncHandler(async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body;
  if (!["ACCEPTED", "REJECTED"].includes(status)) {
    throw new ApiError(400, "Status must be ACCEPTED or REJECTED");
  }

  const request = await prisma.companionRequest.findUnique({ where: { id: requestId } });
  if (!request) throw new ApiError(404, "Companion request not found");
  if (request.recipientId !== req.user.id) throw new ApiError(403, "You cannot respond to this request");
  if (request.status !== "PENDING") throw new ApiError(409, "This request has already been resolved");
  const now = new Date();
  if (request.expiresAt <= now) throw new ApiError(409, "This request has expired");

  const updatedRequest = await prisma.$transaction(async (transaction) => {
    if (status === "ACCEPTED") {
      const offer = await transaction.travelOffer.findUnique({ where: { id: request.offerId } });
      const travelRequest = await transaction.travelRequest.findUnique({ where: { id: request.travelRequestId } });
      if (
        !offer ||
        !travelRequest ||
        !travelRequest.isActive ||
        !offer.isActive ||
        travelRequest.expiresAt <= now ||
        offer.expiresAt <= now ||
        travelRequest.departureAt <= now ||
        offer.departureAt <= now
      ) {
        throw new ApiError(409, "This match is no longer available.");
      }
      if (!isOfferEligibleForRequest(travelRequest, offer, now)) {
        throw new ApiError(409, "This offer is no longer compatible with the travel request.");
      }
    }

    const responseUpdate = await transaction.companionRequest.updateMany({
      where: { id: request.id, status: "PENDING", expiresAt: { gt: now } },
      data: { status, respondedAt: now }
    });
    if (responseUpdate.count !== 1) {
      throw new ApiError(409, "This request has already been resolved or expired");
    }

    if (status === "ACCEPTED") {
      const offer = await transaction.travelOffer.findUnique({ where: { id: request.offerId } });
      const travelRequest = await transaction.travelRequest.findUnique({ where: { id: request.travelRequestId } });
      if (!offer || !travelRequest) throw new ApiError(409, "This match is no longer available.");

      const seatUpdate = await transaction.travelOffer.updateMany({
        where: {
          id: offer.id,
          isActive: true,
          availableSeats: { gte: travelRequest.passengersRequired }
        },
        data: { availableSeats: { decrement: travelRequest.passengersRequired } }
      });
      if (seatUpdate.count !== 1) {
        throw new ApiError(409, "There are no longer enough seats for this journey");
      }
      await transaction.travelOffer.updateMany({
        where: { id: offer.id, availableSeats: 0 },
        data: { isActive: false }
      });

      const requestUpdate = await transaction.travelRequest.updateMany({
        where: {
          id: travelRequest.id,
          isActive: true,
          expiresAt: { gt: now },
          departureAt: { gt: now }
        },
        data: { isActive: false }
      });
      if (requestUpdate.count !== 1) throw new ApiError(409, "This travel request is no longer active.");
      await transaction.companionRequest.updateMany({
        where: {
          id: { not: request.id },
          travelRequestId: travelRequest.id,
          status: "PENDING"
        },
        data: { status: "CANCELLED", respondedAt: now }
      });
    }

    const updated = await transaction.companionRequest.findUnique({
      where: { id: request.id },
      include: { sender: { select: { id: true, name: true } }, recipient: { select: { id: true, name: true } } }
    });
    if (status === "ACCEPTED") {
      await transaction.journey.create({ data: { companionRequestId: request.id } });
    }
    return updated;
  });

  return res.status(200).json(new ApiResponse(200, updatedRequest, `Companion request ${status.toLowerCase()} successfully`));
});
