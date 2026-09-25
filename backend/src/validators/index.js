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



export {
    registerValidator,
    loginValidator,
    profileValidator 
};