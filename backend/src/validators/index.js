import {body} from "express-validator"


const registerValidator = () => {
    return [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name is required"),

        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Please provide a valid email"),

        body("password")
            .notEmpty()
            .withMessage("Password is required")
            .isLength({ min: 8 })
            .withMessage("Password must be at least 8 characters long")
    ]
};

const loginValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Please provide a valid email"),

        body("password")
            .notEmpty()
            .withMessage("Password is required")
    ]
}

const profileValidator = () => {
    return[

        body("phoneNumber")
            .trim()
            .notEmpty()
            .withMessage("Phone number is required")
            .matches(/^[6-9]\d{9}$/)
            .withMessage("Please provide a valid 10-digit phone number"),

        body("gender")
            .notEmpty()
            .withMessage("Gender is required")
            .isIn([
                "MALE",
                "FEMALE",
                "NON_BINARY",
                "PREFER_NOT_TO_SAY"
            ])
            .withMessage("Invalid gender value")
    ];
}

const createTravelOfferValidator = () => {
    return [
        body("transportMode")
            .isIn(["CAB", "BUS", "TRAIN", "FLIGHT", "CAR", "OTHER"])
            .withMessage("Invalid transport mode"),
        
        body("availableSeats")
            .notEmpty()
            .withMessage("Available seats is required")
            .isInt({ min: 1 })
            .withMessage("Available seats must be at least 1"),

        body("source")
            .trim()
            .notEmpty()
            .withMessage("Source is required"),

        body("destination")
            .trim()
            .notEmpty()
            .withMessage("Destination is required"),

        body("departureAt")
            .notEmpty()
            .withMessage("Departure time is required")
            .isISO8601()
            .withMessage("Departure time must be a valid ISO 8601 date"),
    ]
}

const createTravelRequestValidator = () => {
    return[
        body("source")
            .trim()
            .notEmpty()
            .withMessage("Source is required"),

        body("destination")
            .trim()
            .notEmpty()
            .withMessage("Destination is required"),

        body("departureAt")
            .notEmpty()
            .withMessage("Departure time is required")
            .isISO8601()
            .withMessage("Departure time must be a valid ISO 8601 date"),

        body("transportMode")
            .optional({ nullable: true })
            .isIn(["CAB", "BUS", "TRAIN", "FLIGHT", "CAR", "OTHER"])
            .withMessage("Invalid transport mode"),

        body("passengersRequired")
            .optional()
            .isInt({ min: 1 })
            .withMessage("Passengers required must be a positive integer")
    ]
}



export {
    registerValidator,
    loginValidator,
    profileValidator,
    createTravelOfferValidator,
    createTravelRequestValidator
};