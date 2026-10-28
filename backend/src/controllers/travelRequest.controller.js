import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

const createTravelRequest = asyncHandler(async (req, res) => {
    const {source,destination,departureAt,transportMode,passengersRequired = 1} = req.body;

    const normalizedSource = source.trim();
    const normalizedDestination = destination.trim();

    if (
        normalizedSource.toLowerCase() ===
        normalizedDestination.toLowerCase()
    ) {
        throw new ApiError(
            400,
            "Source and destination cannot be the same"
        );
    }

    const departureDate = new Date(departureAt);
    const now = new Date();
    const minimumDeparture = new Date(
        now.getTime() + 2 * 60 * 60 * 1000
    );

    if (Number.isNaN(departureDate.getTime())) {
        throw new ApiError(400, "Invalid departure time");
    }

    if (departureDate <= minimumDeparture) {
        throw new ApiError(
            400,
            "Departure must be more than two hours in the future"
        );
    }

    const expiresAt = new Date(
        departureDate.getTime() - 2 * 60 * 60 * 1000
    );

    const duplicateWindowStart = new Date(
        departureDate.getTime() - 10 * 60 * 1000
    );

    const duplicateWindowEnd = new Date(
        departureDate.getTime() + 10 * 60 * 1000
    );

    const existingRequest = await prisma.travelRequest.findFirst({
        where: {
            userId: req.user.id,
            source: normalizedSource,
            destination: normalizedDestination,
            isActive: true,
            expiresAt: { gt: now },
            departureAt: {
                gte: duplicateWindowStart,
                lte: duplicateWindowEnd
            }
        }
    });

    if (existingRequest) {
        throw new ApiError(
            409,
            "You already have a similar active travel request"
        );
    }

    
    const travelRequest = await prisma.travelRequest.create({
        data: {
            userId: req.user.id,
            source: normalizedSource,
            destination: normalizedDestination,
            departureAt: departureDate,
            expiresAt,
            transportMode: transportMode ?? null,
            passengersRequired
        },
        select: {
            id: true,
            source: true,
            destination: true,
            departureAt: true,
            expiresAt: true,
            transportMode: true,
            passengersRequired: true,
            isActive: true,
            createdAt: true,

            user: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });


    return res.status(201).json(
        new ApiResponse(
            201,
            travelRequest,
            "Travel request created successfully"
        )
    );
});

const getTravelRequests = asyncHandler(async (req, res) => {
    const page = Number(req.query.page ?? 1);

    if (!Number.isInteger(page) || page < 1) {
        throw new ApiError(
            400,
            "Page cannot be a positive integer"
        );
    }

    const pageSize = 8;
    const now = new Date();

    const where = {
        isActive: true,
        expiresAt: { gt: now },
        departureAt: { gt: now }
    };

    const [requests, totalRequests] = await Promise.all([
        prisma.travelRequest.findMany({
            where,
            orderBy: { departureAt: "asc" },
            skip: (page - 1) * pageSize,
            take: pageSize,
            select: {
                id: true,
                source: true,
                destination: true,
                departureAt: true,
                expiresAt: true,
                transportMode: true,
                passengersRequired: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        }),

        prisma.travelRequest.count({ where })
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                requests,
                pagination: {
                    currentPage: page,
                    pageSize,
                    totalRequests,
                    totalPages: Math.ceil(totalRequests / pageSize)
                }
            },
            "Travel requests fetched successfully"
        )
    );
});


const getTravelRequestMatches = asyncHandler(async (req, res) => {
    const { requestId } = req.params;

    // 1. Validate pagination
    const page = Number(req.query.page ?? 1);

    if (!Number.isInteger(page) || page < 1) {
        throw new ApiError(400, "Page must be a positive integer");
    }

    const pageSize = 8;
    const now = new Date();

    // 2. Retrieve the specific travel request
    const travelRequest = await prisma.travelRequest.findUnique({
        where: {
            id: requestId
        }
    });

    if (!travelRequest) {
        throw new ApiError(404, "Travel request not found");
    }

    // 3. Only the request owner can search its matches
    if (travelRequest.userId !== req.user.id) {
        throw new ApiError(
            403,
            "You are not authorized to search matches for this request"
        );
    }

    // 4. Ensure the request is still eligible
    if (
        !travelRequest.isActive ||
        travelRequest.expiresAt <= now ||
        travelRequest.departureAt <= now
    ) {
        throw new ApiError(
            400,
            "This travel request is no longer eligible for matching"
        );
    }

    // 5. Calculate the allowed departure window: +/- 30 minutes
    const requestedDeparture = travelRequest.departureAt;

    const windowStart = new Date(
        requestedDeparture.getTime() - 60 * 60 * 1000
    );

    const windowEnd = new Date(
        requestedDeparture.getTime() + 60 * 60 * 1000
    );

    // 6. Find offers that satisfy the hard constraints
    const matchingOffers = await prisma.travelOffer.findMany({
        where: {
            ownerId: {
                not: travelRequest.userId
            },

            source: {
                equals: travelRequest.source.trim(),
                mode: "insensitive"
            },

            destination: {
                equals: travelRequest.destination.trim(),
                mode: "insensitive"
            },

            departureAt: {
                gte: windowStart,
                lte: windowEnd,
                gt: now
            },

            isActive: true,
            expiresAt: {
                gt: now
            },

            availableSeats: {
                gte: travelRequest.passengersRequired
            },

            ...(travelRequest.transportMode
                ? {
                    transportMode: travelRequest.transportMode
                }
                : {})
        },

        select: {
            id: true,
            source: true,
            destination: true,
            departureAt: true,
            expiresAt: true,
            transportMode: true,
            availableSeats: true,
            createdAt: true,

            owner: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });

    // 7. Rank eligible offers by departure-time closeness
    matchingOffers.sort((a, b) => {
        const differenceA = Math.abs(
            a.departureAt.getTime() - requestedDeparture.getTime()
        );

        const differenceB = Math.abs(
            b.departureAt.getTime() - requestedDeparture.getTime()
        );

        return (
            differenceA - differenceB ||
            a.departureAt.getTime() - b.departureAt.getTime()
        );
    });

    // 8. Apply pagination after ranking
    const totalOffers = matchingOffers.length;
    const totalPages = Math.ceil(totalOffers / pageSize);

    const offers = matchingOffers.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    // 9. Return the ranked results
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                requestId: travelRequest.id,
                offers,
                pagination: {
                    currentPage: page,
                    pageSize,
                    totalOffers,
                    totalPages
                }
            },
            "Matching travel offers fetched successfully"
        )
    );
});


export { createTravelRequest, getTravelRequests, getTravelRequestMatches};