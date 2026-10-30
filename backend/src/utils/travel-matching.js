export const SHAREABLE_RIDE_MODES = Object.freeze(["CAB", "AUTO"]);
export const DEPARTURE_TOLERANCE_MINUTES = 30;

export const normalizeLocation = (value) =>
    typeof value === "string"
        ? value.normalize("NFKD").replace(/\p{Diacritic}/gu, "").trim().replace(/\s+/g, " ").toLowerCase()
        : "";

export const getDepartureCompatibility = (request, offer) => {
    const departureAt = new Date(offer.departureAt);
    const requestedDeparture = new Date(request.departureAt);
    const differenceMinutes = Math.abs(
        departureAt.getTime() - requestedDeparture.getTime()
    ) / 60000;

    return {
        compatible: Number.isFinite(differenceMinutes) &&
            differenceMinutes <= DEPARTURE_TOLERANCE_MINUTES,
        differenceMinutes,
        toleranceMinutes: DEPARTURE_TOLERANCE_MINUTES
    };
};

export const isOfferEligibleForRequest = (request, offer, now = new Date()) => {
    const departureAt = new Date(offer.departureAt);
    const expiresAt = new Date(offer.expiresAt);

    return Boolean(
        offer.isActive &&
        departureAt > now &&
        expiresAt > now &&
        SHAREABLE_RIDE_MODES.includes(offer.transportMode) &&
        (!request.transportMode || request.transportMode === offer.transportMode) &&
        normalizeLocation(request.source) === normalizeLocation(offer.source) &&
        normalizeLocation(request.destination) === normalizeLocation(offer.destination) &&
        getDepartureCompatibility(request, offer).compatible &&
        offer.availableSeats >= request.passengersRequired
    );
};

export const isDuplicateActiveRequest = (candidate, existing, now = new Date()) => {
    const existingDeparture = new Date(existing.departureAt);
    const candidateDeparture = new Date(candidate.departureAt);
    const expiresAt = new Date(existing.expiresAt);

    return Boolean(
        existing.userId === candidate.userId &&
        existing.isActive &&
        expiresAt > now &&
        Number.isFinite(existingDeparture.getTime()) &&
        Number.isFinite(candidateDeparture.getTime()) &&
        Math.abs(existingDeparture.getTime() - candidateDeparture.getTime()) <= 10 * 60 * 1000 &&
        normalizeLocation(existing.source) === normalizeLocation(candidate.source) &&
        normalizeLocation(existing.destination) === normalizeLocation(candidate.destination)
    );
};
