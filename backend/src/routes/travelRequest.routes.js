import {Router} from "express";
import { createTravelRequest, getTravelRequests, getTravelRequestMatches } from "../controllers/travelRequest.controller.js";
import { createTravelRequestValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"


const router = Router();

router.route("/")
    .post(verifyJWT, createTravelRequestValidator(), validate, createTravelRequest)
    .get(verifyJWT, getTravelRequests)

router.route("/:requestId/matches")
    .get(verifyJWT, getTravelRequestMatches)


export default router;