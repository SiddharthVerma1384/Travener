import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

const createTravelOffer = asyncHandler(async(req, res) => {
    const {
        source,
        destination,
        departureAt,
        transportMode,
        availableSeats
    } = req.body;

    const normalizedSource = source.trim();
    const normalizedDestination = destination.trim();

    if (normalizedSource.toLowerCase() === normalizedDestination.toLowerCase()){
        throw new ApiError(
            400,
            "Source and Destination must not be same"
        )
    }

    const departureDate = new Date(departureAt);

    if (departureDate <= new Date()) {
        throw new ApiError(
            400,
            "Departure time must be in future only"
        );
    }

    const expiresAt = new Date(
        departureDate.getTime() - 2 * 60 * 60 * 1000
    );

    const duplicateWindowStart = new Date(
        departureDate.getTime() - 20 * 60 * 1000
    );

    const duplicateWindowEnd = new Date(
        departureDate.getTime() + 20 * 60 * 1000
    );

    const existingOffer = await prisma.travelOffer.findFirst({
        where: {
            ownerId: req.user.id,
            source: normalizedSource,
            destination: normalizedDestination,
            isActive: true,
            departureAt: {
                gte: duplicateWindowStart,
                lte: duplicateWindowEnd
            }
        }
    });

    if (existingOffer) {
        throw new ApiError(
            409,
            "You already have an active travel offer at this time"
        );
    }

    
const travelOffer = await prisma.travelOffer.create({
    data: {
        ownerId: req.user.id,
        source: normalizedSource,
        destination: normalizedDestination,
        departureAt: departureDate,
        expiresAt,
        transportMode,
        availableSeats
    },
    select: {
        id: true,
        source: true,
        destination: true,
        departureAt: true,
        expiresAt: true,
        transportMode: true,
        availableSeats: true,
        isActive: true,
        createdAt: true,

        owner: {
            select: {
                id: true,
                name: true
            }
        }
    }
});


    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                travelOffer,
                "Travel offer created successfully"
            )
        )

})


export{
    createTravelOffer
}