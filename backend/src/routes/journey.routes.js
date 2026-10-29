import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getJourneys, updateJourney, getMessages, sendMessage, rateJourney, reportJourney, getAdminReports } from "../controllers/journey.controller.js";

const router = Router();
router.route("/").get(verifyJWT, getJourneys);
router.route("/admin/reports").get(verifyJWT, getAdminReports);
router.route("/:journeyId").patch(verifyJWT, updateJourney);
router.route("/:journeyId/messages").get(verifyJWT, getMessages).post(verifyJWT, sendMessage);
router.route("/:journeyId/rating").post(verifyJWT, rateJourney);
router.route("/:journeyId/report").post(verifyJWT, reportJourney);

export default router;
