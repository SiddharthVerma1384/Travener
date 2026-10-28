-- CreateEnum
CREATE TYPE "CompanionRequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED', 'EXPIRED');

-- CreateTable
CREATE TABLE "CompanionRequest" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "travelRequestId" TEXT NOT NULL,
    "offerId" TEXT NOT NULL,
    "status" "CompanionRequestStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "respondedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CompanionRequest_senderId_status_idx" ON "CompanionRequest"("senderId", "status");

-- CreateIndex
CREATE INDEX "CompanionRequest_recipientId_status_idx" ON "CompanionRequest"("recipientId", "status");

-- CreateIndex
CREATE INDEX "CompanionRequest_offerId_status_idx" ON "CompanionRequest"("offerId", "status");

-- CreateIndex
CREATE INDEX "CompanionRequest_travelRequestId_idx" ON "CompanionRequest"("travelRequestId");

-- CreateIndex
CREATE INDEX "CompanionRequest_status_expiresAt_idx" ON "CompanionRequest"("status", "expiresAt");

-- AddForeignKey
ALTER TABLE "CompanionRequest" ADD CONSTRAINT "CompanionRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanionRequest" ADD CONSTRAINT "CompanionRequest_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanionRequest" ADD CONSTRAINT "CompanionRequest_travelRequestId_fkey" FOREIGN KEY ("travelRequestId") REFERENCES "TravelRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanionRequest" ADD CONSTRAINT "CompanionRequest_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "TravelOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
