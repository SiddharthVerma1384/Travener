-- CreateTable
CREATE TABLE "TravelRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departureAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "transportMode" "TransportMode",
    "passengersRequired" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TravelRequest_userId_idx" ON "TravelRequest"("userId");

-- CreateIndex
CREATE INDEX "TravelRequest_isActive_departureAt_idx" ON "TravelRequest"("isActive", "departureAt");

-- CreateIndex
CREATE INDEX "TravelRequest_source_destination_departureAt_idx" ON "TravelRequest"("source", "destination", "departureAt");

-- AddForeignKey
ALTER TABLE "TravelRequest" ADD CONSTRAINT "TravelRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
