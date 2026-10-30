import test from "node:test";
import assert from "node:assert/strict";
import {
    DEPARTURE_TOLERANCE_MINUTES,
    getDepartureCompatibility,
    isDuplicateActiveRequest,
    isOfferEligibleForRequest,
    normalizeLocation
} from "../src/utils/travel-matching.js";

test("normalizes route locations across casing, accents, and whitespace", () => {
    assert.equal(normalizeLocation("  NEW   DELHI "), "new delhi");
    assert.equal(normalizeLocation("  Béngaluru "), "bengaluru");
});

test("preserves route, time, seat, and shareable-mode eligibility constraints", () => {
    const now = new Date("2030-01-01T00:00:00Z");
    const request = {
        source: "New Delhi",
        destination: "Mumbai",
        departureAt: "2030-01-01T10:00:00Z",
        passengersRequired: 2,
        transportMode: "CAB"
    };
    const offer = {
        source: " new   delhi ",
        destination: "MUMBAI",
        departureAt: "2030-01-01T10:30:00Z",
        expiresAt: "2030-01-01T08:30:00Z",
        availableSeats: 2,
        transportMode: "CAB",
        isActive: true
    };

    assert.equal(isOfferEligibleForRequest(request, offer, now), true);
    assert.equal(isOfferEligibleForRequest(request, { ...offer, availableSeats: 1 }, now), false);
    assert.equal(isOfferEligibleForRequest(request, { ...offer, transportMode: "BUS" }, now), false);
    assert.equal(isOfferEligibleForRequest(request, { ...offer, departureAt: "2030-01-01T12:00:01Z" }, now), false);
});

test("uses a fixed 30-minute departure tolerance, independent of legacy flexibility fields", () => {
    const request = { departureAt: "2030-01-01T10:00:00Z" };
    const offer = {
        departureAt: "2030-01-01T10:30:00Z"
    };
    assert.equal(DEPARTURE_TOLERANCE_MINUTES, 30);
    assert.deepEqual(getDepartureCompatibility(request, offer), {
        compatible: true,
        differenceMinutes: 30,
        toleranceMinutes: 30
    });
    assert.equal(getDepartureCompatibility(request, {
        ...offer,
        departureAt: "2030-01-01T10:30:01Z"
    }).compatible, false);
    assert.equal(getDepartureCompatibility(
        { ...request, timeFlexibilityMinutes: 60, terminalType: "AIRPORT" },
        { ...offer, timeFlexibilityMinutes: 60, terminalType: "RAILWAY_STATION" }
    ).compatible, true);
});

test("duplicate requests ignore cancelled and completed entries but match active ones", () => {
    const now = new Date("2030-01-01T00:00:00Z");
    const candidate = {
        userId: "user-1",
        source: "New Delhi",
        destination: "Mumbai",
        departureAt: "2030-01-01T10:00:00Z"
    };
    const active = {
        ...candidate,
        source: " new  delhi ",
        isActive: true,
        expiresAt: "2030-01-01T08:00:00Z"
    };

    assert.equal(isDuplicateActiveRequest(candidate, active, now), true);
    assert.equal(isDuplicateActiveRequest(candidate, { ...active, isActive: false }, now), false);
    assert.equal(isDuplicateActiveRequest(candidate, { ...active, expiresAt: "2029-12-31T23:59:59Z" }, now), false);
    assert.equal(isDuplicateActiveRequest(candidate, { ...active, userId: "user-2" }, now), false);
});
