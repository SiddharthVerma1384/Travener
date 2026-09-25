import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";

const getProfile = asyncHandler(async (req, res) => {

    return res.status(200).json(
        new ApiResponse(
            200,
            req.user,
            "Profile fetched successfully"
        )
    );
});

const setupProfile = asyncHandler(async (req, res) => {

    const { phoneNumber, gender } = req.body;

    if (req.user.profileCompleted) {
        throw new ApiError(
            400,
            "Profile is already filled"
        );
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: req.user.id
        },
        data: {
            phoneNumber,
            gender,
            profileCompleted: true
        },
        select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
            gender: true,
            profileCompleted: true,
            role: true,
            status: true,
            emailVerified: true,
            authProvider: true,
            createdAt: true,
            updatedAt: true
        }
    });

    return res
        .status(200)
        .json(
        new ApiResponse(
            200,
            updatedUser,
            "Profile setup completed successfully"
        )
    );
});


export { 
    getProfile,
    setupProfile
};