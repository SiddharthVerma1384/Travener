import {Router} from "express";
import { createTravelOffer } from "../controllers/travelOffer.controller.js";
import { createTravelOfferValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"


const router = Router();

router.route("/").post(verifyJWT, createTravelOfferValidator(), validate, createTravelOffer)

export default router;