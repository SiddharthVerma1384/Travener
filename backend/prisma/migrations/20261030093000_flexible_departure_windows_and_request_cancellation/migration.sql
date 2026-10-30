ALTER TABLE "TravelOffer"
    ADD COLUMN "timeFlexibilityMinutes" INTEGER,
    ADD CONSTRAINT "TravelOffer_timeFlexibilityMinutes_check"
        CHECK ("timeFlexibilityMinutes" IS NULL OR "timeFlexibilityMinutes" IN (0, 15, 30, 45, 60));

ALTER TABLE "TravelRequest"
    ADD COLUMN "timeFlexibilityMinutes" INTEGER,
    ADD COLUMN "cancelledAt" TIMESTAMP(3),
    ADD CONSTRAINT "TravelRequest_timeFlexibilityMinutes_check"
        CHECK ("timeFlexibilityMinutes" IS NULL OR "timeFlexibilityMinutes" IN (0, 15, 30, 45, 60));
