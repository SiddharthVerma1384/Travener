import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

const normalize = (value) =>
    value.trim().replace(/\s+/g, " ").toLowerCase();

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
        normalize(travelRequest.source) !== normalize(offer.source) ||
        normalize(travelRequest.destination) !==
            normalize(offer.destination)
    ) {
        throw new ApiError(
            400,
            "The travel request and offer have incompatible routes."
        );
    }

    // 7. Departure times must be within 30 minutes.
    const departureDifference = Math.abs(
        travelRequest.departureAt.getTime() -
        offer.departureAt.getTime()
    );

    if (departureDifference > 30 * 60 * 1000) {
        throw new ApiError(
            400,
            "Departure times must be within 30 minutes."
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
    const existingRequest =
        await prisma.companionRequest.findFirst({
            where: {
                travelRequestId,
                offerId,
                status: "PENDING",
                expiresAt: { gt: now }
            }
        });

    if (existingRequest) {
        throw new ApiError(
            409,
            "A pending companion request already exists for this match."
        );
    }

    // 12. Persist the pending request.
    const companionRequest =
        await prisma.companionRequest.create({
            data: {
                senderId,
                recipientId,
                travelRequestId,
                offerId,
                status: "PENDING",
                expiresAt
            }
        });

    // 13. Return the standard API response.
    return res.status(201).json(
        new ApiResponse(
            201,
            { companionRequest },
            "Companion request sent successfully."
        )
    );
});
