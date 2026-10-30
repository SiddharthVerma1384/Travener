import { PDFParse } from "pdf-parse";
import { createWorker } from "tesseract.js";
import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { extractTicketFields } from "../utils/ticket-ocr.js";

const recognizeImage = async (buffer) => {
  const worker = await createWorker("eng");
  try {
    const result = await worker.recognize(buffer);
    return result.data.text;
  } finally {
    await worker.terminate();
  }
};

const readDocument = async (file) => {
  if (file.mimetype === "application/pdf") {
    const parser = new PDFParse({ data: file.buffer });
    try {
      const result = await parser.getText();
      return result.text;
    } finally {
      await parser.destroy();
    }
  }
  if (["image/jpeg", "image/png", "image/webp"].includes(file.mimetype)) return recognizeImage(file.buffer);
  throw new ApiError(400, "Only PDF, JPG, PNG, and WEBP tickets are supported");
};

const documentSelect = { id: true, originalName: true, mimeType: true, ocrStatus: true, rawText: true, source: true, destination: true, departureAt: true, transportMode: true, errorMessage: true, createdAt: true };

export const uploadTravelDocument = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, "A ticket file is required");
  if (req.file.size > 10 * 1024 * 1024) throw new ApiError(413, "Ticket file must be smaller than 10 MB");
  const document = await prisma.travelDocument.create({ data: { userId: req.user.id, originalName: req.file.originalname, mimeType: req.file.mimetype } });
  try {
    const rawText = await readDocument(req.file);
    const extracted = extractTicketFields(rawText);
    const { travelDate, departureTime, ...documentFields } = extracted;
    const updated = await prisma.travelDocument.update({ where: { id: document.id }, data: { ...documentFields, rawText, ocrStatus: "COMPLETED" }, select: documentSelect });
    return res.status(201).json(new ApiResponse(201, {
      documentId: updated.id,
      ocrStatus: updated.ocrStatus,
      extractedData: { ...updated, travelDate, departureTime }
    }, "Ticket processed successfully"));
  } catch (error) {
    await prisma.travelDocument.update({ where: { id: document.id }, data: { ocrStatus: "FAILED", errorMessage: error.message } });
    if (error instanceof ApiError) throw error;
    throw new ApiError(422, "Ticket OCR could not be completed");
  }
});

export const confirmTravelDocument = asyncHandler(async (req, res) => {
  const document = await prisma.travelDocument.findFirst({ where: { id: req.params.documentId, userId: req.user.id } });
  if (!document) throw new ApiError(404, "Travel document not found");
  if (!["COMPLETED", "CONFIRMED"].includes(document.ocrStatus)) throw new ApiError(409, "Only successfully processed tickets can be confirmed");
  const corrections = req.body.corrections || {};
  const destination = corrections.destinationHub?.name?.trim() || document.destination;
  const source = corrections.source?.trim() || document.source;
  const dateText = corrections.travelDate;
  const timeText = corrections.departureTime;
  let departureAt = document.departureAt;
  if (corrections.departureAt) {
    departureAt = new Date(corrections.departureAt);
    if (Number.isNaN(departureAt.getTime())) throw new ApiError(400, "Invalid corrected departure date or time");
  } else if (dateText) {
    const date = new Date(`${dateText}T${timeText || "00:00"}`);
    if (Number.isNaN(date.getTime())) throw new ApiError(400, "Invalid corrected departure date or time");
    departureAt = date;
  }
  const transportMode = corrections.transportType || document.transportMode;
  if (!source || !destination || !departureAt || !transportMode) throw new ApiError(400, "Source, destination, departure time, and transport mode are required");
  const updated = await prisma.travelDocument.update({ where: { id: document.id }, data: { source, destination, departureAt, transportMode, ocrStatus: "CONFIRMED", errorMessage: null }, select: documentSelect });
  return res.status(200).json(new ApiResponse(200, updated, "Ticket details confirmed successfully"));
});

export const getTravelDocument = asyncHandler(async (req, res) => {
  const document = await prisma.travelDocument.findFirst({ where: { id: req.params.documentId, userId: req.user.id }, select: documentSelect });
  if (!document) throw new ApiError(404, "Travel document not found");
  return res.status(200).json(new ApiResponse(200, document, "Travel document fetched successfully"));
});
