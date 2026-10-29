-- CreateEnum
CREATE TYPE "TravelDocumentStatus" AS ENUM ('PROCESSING', 'COMPLETED', 'FAILED', 'CONFIRMED');

-- CreateTable
CREATE TABLE "TravelDocument" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "ocrStatus" "TravelDocumentStatus" NOT NULL DEFAULT 'PROCESSING',
    "rawText" TEXT,
    "source" TEXT,
    "destination" TEXT,
    "departureAt" TIMESTAMP(3),
    "transportMode" "TransportMode",
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TravelDocument_userId_createdAt_idx" ON "TravelDocument"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "TravelDocument" ADD CONSTRAINT "TravelDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
