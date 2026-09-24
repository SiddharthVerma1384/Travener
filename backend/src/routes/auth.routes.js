import {Router} from "express"
import { registerUser, loginUser, getCurrentUser, refreshAccessToken, logoutUser, googleAuth, googleCallback } from "../controllers/auth.controllers.js"
import { registerValidator, loginValidator } from "../validators/index.js"
import {validate} from "../middlewares/validator.middleware.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.route("/google").get(googleAuth)
router.route("/google/callback").get(googleCallback)



router.route("/register").post(registerValidator(), validate, registerUser)
router.route("/login").post(loginValidator(), validate, loginUser)
router.route("/logout").post(logoutUser)



router.route("/current-user").get(verifyJWT, getCurrentUser )
router.route("/refresh-token").post(refreshAccessToken)


export default router;