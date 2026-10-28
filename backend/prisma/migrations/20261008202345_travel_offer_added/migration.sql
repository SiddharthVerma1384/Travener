-- CreateEnum
CREATE TYPE "TransportMode" AS ENUM ('CAB', 'BUS', 'TRAIN', 'FLIGHT', 'CAR', 'OTHER');

-- CreateTable
CREATE TABLE "TravelOffer" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departureAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "transportMode" "TransportMode" NOT NULL,
    "availableSeats" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelOffer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TravelOffer" ADD CONSTRAINT "TravelOffer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
