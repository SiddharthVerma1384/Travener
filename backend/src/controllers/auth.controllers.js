import bcrypt from "bcrypt"
import { prisma } from "../db/index.js"
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import crypto from "crypto";
import { googleClient } from "../utils/google.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from "jsonwebtoken"
import { AuthProvider } from "../generated/prisma/client.js";
import { hashToken, generateAccessToken, generateRefreshToken } from "../utils/token.js";



const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;
    
    const normalizedEmail = email.trim().toLowerCase();
    
    const existingUser = await prisma.user.findUnique({
        where: {
            email: normalizedEmail
        }
    })

    if (existingUser){
        throw new ApiError(
            409, "User with this email already exist"
        )
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name: name.trim(),
            email: normalizedEmail,
            passwordHash,
            authProvider: AuthProvider.LOCAL
        },

        select: {
            id: true,
            name: true,
            email: true,
            authProvider: true,
            emailVerified: true,
            role: true,
            status: true,
            createdAt: true
        }
    })

    return res
        .status(201)
        .json(
            new ApiResponse(
                200,
                user,
                "User registered successfully"
            )
        )

})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    if(!email){
        throw new ApiError(400, "Email is required")
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
        where: {
            email: normalizedEmail
        }
    });

    if(!user){
        throw new ApiError(401, "Invalid Email or Password")
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordCorrect) {
        throw new ApiError(
            401,
            "Invalid email or password"
        );
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const tokenHash = hashToken(refreshToken);

    await prisma.refreshSession.create({
        data: {
            userId: user.id,
            tokenHash,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
        }
    });

    const loggedInUser = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            authProvider: true
        }
    });   
    
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        )
})

const getCurrentUser = asyncHandler(async(req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                req.user,
                "Current User fetched successfully"
            )
        )
})

const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies?.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(
            401,
            "Refresh token is required"
        );
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const tokenHash = hashToken(incomingRefreshToken);

        const session = await prisma.refreshSession.findUnique({
            where: {
                tokenHash
            }
        });

        if (!session) {
            throw new ApiError(
                401,
                "Invalid refresh token"
            );
        }


        if (session.revokedAt) {
            throw new ApiError(
                401,
                "Refresh token has been revoked"
            );
        }


        if (session.expiresAt <= new Date()) {
            throw new ApiError(
                401,
                "Refresh token has expired"
            );
        }

        if (session.userId !== decodedToken._id) {
            throw new ApiError(
                401,
                "Invalid refresh token"
            );
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                status: true,
                authProvider: true
            }
        });

        if (!user) {
            throw new ApiError(
                401,
                "User no longer exists"
            );
        }

        if (user.status !== "ACTIVE") {
            throw new ApiError(
                403,
                "User account is not active"
            );
        }

        const accessToken = generateAccessToken(user);

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .json(
                new ApiResponse(
                    200,
                    null,
                    "Access token refreshed successfully"
                )
            );

    } catch (error) {
        

        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError(
            401,
            "Invalid or expired refresh token"
        );
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies?.refreshToken;

    if (refreshToken) {
        const tokenHash = hashToken(refreshToken);

        await prisma.refreshSession.updateMany({
            where: {
                tokenHash,
                revokedAt: null
            },
            data: {
                revokedAt: new Date()
            }
        });
    }

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(
                200,
                {},
                "User logged out successfully"
            )
        );
});

const googleAuth = asyncHandler(async (req, res) => {

    const state = crypto.randomBytes(32).toString("hex");

    const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 5 * 60 * 1000
        };

    
    const authUrl = googleClient.generateAuthUrl({
        access_type: "offline",
        scope: ["openid", "email", "profile"],
        state,
        prompt: "select_account"
    });

    return res
        .cookie("googleOAuthState", state, options)
        .redirect(authUrl);
});

const googleCallback = asyncHandler(async (req, res) => {

    const { code, state } = req.query;

    if (!code) {
        throw new ApiError(
            400,
            "Google authorization code is missing"
        );
    }

    const savedState = req.cookies?.googleOAuthState;

    if (!state || !savedState || state !== savedState) {
        throw new ApiError(
            401,
            "Invalid Google OAuth state"
        );
    }

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    };

    
    res.clearCookie("googleOAuthState", cookieOptions);

    try {
        
        const { tokens } = await googleClient.getToken(code);

        if (!tokens.id_token) {
            throw new ApiError(
                401,
                "Google ID token was not received"
            );
        }

        
        const ticket = await googleClient.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();

        if (!payload) {
            throw new ApiError(
                401,
                "Invalid Google account information"
            );
        }

        const {
            sub: googleId,
            email,
            email_verified: emailVerified,
            name
        } = payload;

        
        if (!googleId || !email) {
            throw new ApiError(
                400,
                "Google account information is incomplete"
            );
        }

        if (!emailVerified) {
            throw new ApiError(
                403,
                "Google email is not verified"
            );
        }

        const normalizedEmail = email.trim().toLowerCase();

        
        let user = await prisma.user.findUnique({
            where: {
                googleId
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                status: true,
                emailVerified: true,
                authProvider: true,
                createdAt: true,
                updatedAt: true
            }
        });

       
        if (!user) {

            const existingEmailUser = await prisma.user.findUnique({
                where: {
                    email: normalizedEmail
                },
                select: {
                    id: true,
                    email: true,
                    authProvider: true
                }
            });

            if (existingEmailUser) {
                throw new ApiError(
                    409,
                    "An account with this email already exists. Please login using your existing authentication method."
                );
            }

            
            user = await prisma.user.create({
                data: {
                    name: name?.trim() || normalizedEmail.split("@")[0],
                    email: normalizedEmail,
                    passwordHash: null,
                    authProvider: AuthProvider.GOOGLE,
                    googleId,
                    emailVerified: true
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    status: true,
                    emailVerified: true,
                    authProvider: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
        }

        
        if (user.status !== "ACTIVE") {
            throw new ApiError(
                403,
                "User account is not active"
            );
        }

        const accessToken = generateAccessToken(user);

        const refreshToken = generateRefreshToken(user);


        const refreshTokenHash = hashToken(refreshToken);

        const refreshExpiresAt = new Date(
            Date.now() + 24 * 60 * 60 * 1000
        );

        await prisma.refreshSession.create({
            data: {
                userId: user.id,
                tokenHash: refreshTokenHash,
                expiresAt: refreshExpiresAt
            }
        });

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        };

        return res
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    user,
                    "Google authentication successful"
                )
            );

    } catch (error) {

        if (error instanceof ApiError) {
            throw error;
        }

        console.error("Google OAuth error:", error);

        throw new ApiError(
            401,
            "Google authentication failed"
        );
    }
});


export {
    registerUser,
    loginUser,
    getCurrentUser,
    refreshAccessToken,
    logoutUser,
    googleAuth,
    googleCallback
};