import jwt from "jsonwebtoken";

import { prisma } from "../db/index.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";


export const verifyJWT = asyncHandler(async (req, res, next) => {

    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new ApiError(
            401,
            "Unauthorized request"
        );
    }

    try {

        const decodedToken = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );

        const user = await prisma.user.findUnique({
            where: {
                id: decodedToken._id
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

        if (!user) {
            throw new ApiError(
                401,
                "Invalid access token"
            );
        }

        if (user.status !== "ACTIVE") {
            throw new ApiError(
                403,
                "User account is not active"
            );
        }

        req.user = user;

        next();

    } catch (error) {

        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError(
            401,
            "Invalid or expired access token"
        );
    }
});

