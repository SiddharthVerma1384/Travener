import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createCompanionRequest, getCompanionRequests, respondToCompanionRequest } from "../controllers/companionRequest.controller.js";

const router = Router();

router.route("/").get(verifyJWT, getCompanionRequests).post(verifyJWT, createCompanionRequest);
router.route("/:requestId/respond").patch(verifyJWT, respondToCompanionRequest);

export default router;
