import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { getDepartureCompatibility } from "../utils/travel-matching.js";

const getJourneyForUser = async (journeyId, userId) => {
  const journey = await prisma.journey.findUnique({ where: { id: journeyId }, include: { companionRequest: true } });
  if (!journey) throw new ApiError(404, "Journey not found");
  if (![journey.companionRequest.senderId, journey.companionRequest.recipientId].includes(userId)) throw new ApiError(403, "You are not part of this journey");
  return journey;
};

export const getJourneys = asyncHandler(async (req, res) => {
  const journeys = await prisma.journey.findMany({
    where: { companionRequest: { OR: [{ senderId: req.user.id }, { recipientId: req.user.id }] } },
    orderBy: { createdAt: "desc" },
    include: {
      companionRequest: {
        include: {
          sender: { select: { id: true, name: true } },
          recipient: { select: { id: true, name: true } },
          offer: { select: { id: true, source: true, destination: true, departureAt: true, transportMode: true, availableSeats: true } },
          travelRequest: { select: { id: true, source: true, destination: true, departureAt: true, passengersRequired: true } }
        }
      }
    }
  });
  const displayJourneys = journeys.map((journey) => ({
    ...journey,
    companionRequest: {
      ...journey.companionRequest,
      departureCompatibility: getDepartureCompatibility(
        journey.companionRequest.travelRequest,
        journey.companionRequest.offer
      )
    }
  }));
  return res.status(200).json(new ApiResponse(200, displayJourneys, "Journeys fetched successfully"));
});

export const updateJourney = asyncHandler(async (req, res) => {
  const { journeyId } = req.params;
  const { status } = req.body;
  if (!["IN_PROGRESS", "COMPLETED", "CANCELLED"].includes(status)) throw new ApiError(400, "Invalid journey status");
  const journey = await getJourneyForUser(journeyId, req.user.id);
  const allowedTransitions = {
    CONFIRMED: ["IN_PROGRESS", "CANCELLED"],
    IN_PROGRESS: ["COMPLETED", "CANCELLED"],
    COMPLETED: [],
    CANCELLED: []
  };
  if (!allowedTransitions[journey.status]?.includes(status)) {
    throw new ApiError(409, `Cannot change a ${journey.status.toLowerCase()} journey to ${status.toLowerCase()}`);
  }
  const now = new Date();
  const result = await prisma.journey.updateMany({
    where: { id: journey.id, status: journey.status },
    data: {
      status,
      startedAt: status === "IN_PROGRESS" ? now : journey.startedAt,
      completedAt: status === "COMPLETED" ? now : journey.completedAt
    }
  });
  if (result.count !== 1) throw new ApiError(409, "This journey changed before your update could be saved");
  const updated = await prisma.journey.findUnique({ where: { id: journey.id } });
  return res.status(200).json(new ApiResponse(200, updated, "Journey updated successfully"));
});

export const getMessages = asyncHandler(async (req, res) => {
  const journey = await getJourneyForUser(req.params.journeyId, req.user.id);
  const messages = await prisma.message.findMany({ where: { journeyId: journey.id }, orderBy: { createdAt: "asc" }, include: { sender: { select: { id: true, name: true } } } });
  return res.status(200).json(new ApiResponse(200, messages, "Messages fetched successfully"));
});

export const sendMessage = asyncHandler(async (req, res) => {
  const journey = await getJourneyForUser(req.params.journeyId, req.user.id);
  const body = req.body.body?.trim();
  if (!body) throw new ApiError(400, "Message body is required");
  if (["COMPLETED", "CANCELLED"].includes(journey.status)) throw new ApiError(409, "Chat is closed for this journey");
  const message = await prisma.message.create({ data: { journeyId: journey.id, requestId: journey.companionRequestId, senderId: req.user.id, body }, include: { sender: { select: { id: true, name: true } } } });
  return res.status(201).json(new ApiResponse(201, message, "Message sent successfully"));
});

export const rateJourney = asyncHandler(async (req, res) => {
  const journey = await getJourneyForUser(req.params.journeyId, req.user.id);
  if (journey.status !== "COMPLETED") throw new ApiError(409, "Complete the journey before rating");
  const stars = Number(req.body.stars); if (!Number.isInteger(stars) || stars < 1 || stars > 5) throw new ApiError(400, "Stars must be between 1 and 5");
  const subjectId = journey.companionRequest.senderId === req.user.id ? journey.companionRequest.recipientId : journey.companionRequest.senderId;
  const rating = await prisma.rating.create({ data: { journeyId: journey.id, authorId: req.user.id, subjectId, stars, comment: req.body.comment?.trim() || null } });
  return res.status(201).json(new ApiResponse(201, rating, "Rating submitted successfully"));
});

export const reportJourney = asyncHandler(async (req, res) => {
  const journey = await getJourneyForUser(req.params.journeyId, req.user.id);
  const reason = req.body.reason?.trim(); if (!reason) throw new ApiError(400, "Report reason is required");
  const subjectId = journey.companionRequest.senderId === req.user.id ? journey.companionRequest.recipientId : journey.companionRequest.senderId;
  const report = await prisma.report.create({ data: { journeyId: journey.id, authorId: req.user.id, subjectId, reason } });
  return res.status(201).json(new ApiResponse(201, report, "Report submitted successfully"));
});

export const getAdminReports = asyncHandler(async (req, res) => {
  if (req.user.role !== "ADMIN") throw new ApiError(403, "Admin access required");
  const reports = await prisma.report.findMany({ orderBy: { createdAt: "desc" }, include: { author: { select: { id: true, name: true, email: true } }, subject: { select: { id: true, name: true, email: true } }, journey: true } });
  return res.status(200).json(new ApiResponse(200, reports, "Reports fetched successfully"));
});

export const updateAdminReport = asyncHandler(async (req, res) => {
  if (req.user.role !== "ADMIN") throw new ApiError(403, "Admin access required");
  const { status } = req.body;
  if (!["REVIEWED", "RESOLVED", "DISMISSED"].includes(status)) {
    throw new ApiError(400, "Choose a valid report status");
  }
  const report = await prisma.report.findUnique({ where: { id: req.params.reportId } });
  if (!report) throw new ApiError(404, "Report not found");
  const allowedTransitions = {
    OPEN: ["REVIEWED", "RESOLVED", "DISMISSED"],
    REVIEWED: ["RESOLVED", "DISMISSED"],
    RESOLVED: [],
    DISMISSED: []
  };
  if (!allowedTransitions[report.status]?.includes(status)) {
    throw new ApiError(409, `Cannot change a ${report.status.toLowerCase()} report to ${status.toLowerCase()}`);
  }
  const updated = await prisma.report.updateMany({
    where: { id: report.id, status: report.status },
    data: { status }
  });
  if (updated.count !== 1) throw new ApiError(409, "This report changed before your update could be saved");
  const updatedReport = await prisma.report.findUnique({
    where: { id: report.id },
    include: {
      author: { select: { id: true, name: true, email: true } },
      subject: { select: { id: true, name: true, email: true } },
      journey: true
    }
  });
  return res.status(200).json(new ApiResponse(200, updatedReport, "Report status updated successfully"));
});
