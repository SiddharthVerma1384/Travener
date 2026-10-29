import { Router } from "express";
import multer from "multer";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { confirmTravelDocument, getTravelDocument, uploadTravelDocument } from "../controllers/travelDocument.controller.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

router.route("/").post(verifyJWT, upload.single("file"), uploadTravelDocument);
router.route("/:documentId").get(verifyJWT, getTravelDocument);
router.route("/:documentId/confirm").post(verifyJWT, confirmTravelDocument);

export default router;
