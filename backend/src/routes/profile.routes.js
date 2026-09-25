import { Router } from "express";
import { getProfile, setupProfile } from "../controllers/profile.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { profileValidator } from "../validators/index.js";
import {validate} from "../middlewares/validator.middleware.js"


const router = Router();

router.route("/").get(verifyJWT, getProfile);
router.route("/").patch(verifyJWT, profileValidator(), validate, setupProfile)

export default router;