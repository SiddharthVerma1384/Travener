ALTER TYPE "TransportMode" ADD VALUE IF NOT EXISTS 'AUTO';

CREATE TYPE "ArrivalTerminalType" AS ENUM ('RAILWAY_STATION', 'AIRPORT', 'BUS_STAND');

ALTER TABLE "TravelOffer"
    ADD COLUMN "terminalType" "ArrivalTerminalType",
    ADD COLUMN "terminalName" TEXT,
    ADD COLUMN "terminalKey" TEXT;

ALTER TABLE "TravelRequest"
    ADD COLUMN "terminalType" "ArrivalTerminalType",
    ADD COLUMN "terminalName" TEXT,
    ADD COLUMN "terminalKey" TEXT;
