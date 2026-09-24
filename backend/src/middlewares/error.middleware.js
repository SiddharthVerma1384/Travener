import {ApiError} from "../utils/api-erro.jsr"

const errorHandler = (err, req, res, next) => {
    if (! (err instanceof ApiError)){
        err = new ApiError(
            500,
            err.message || "Internal Server Error"
        )
    }

    return res
        .status(err.statusCode)
        .json(
            {
                statusCode: err.statusCode,
                message: err.message,
                success: err.success,
                errors: err.errors,
                stack: process.env.NODE_ENV === "development" ? err.stack : undefined
            }
        )
}

export {errorHandler}
