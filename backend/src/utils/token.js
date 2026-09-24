import jwt from "jsonwebtoken";
import crypto from "crypto"


const generateAccessToken = (user) => {
    return jwt.sign(
        {
            _id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            _id: user.id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

const hashToken = (token) => {
    return crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
};


export {
    generateAccessToken,
    generateRefreshToken,
    hashToken
};