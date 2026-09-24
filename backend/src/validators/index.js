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


export {
    registerValidator,
    loginValidator
};