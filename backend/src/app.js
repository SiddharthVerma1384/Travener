import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middlewares/error.middleware.js"

const app = express()

// basic configurationsss...

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods:["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"]
}))

// importing routes

import authRouter from "./routes/auth.routes.js"  
import profileRouter from "./routes/profile.routes.js"
import travelOfferRouter from "./routes/travelOffer.routes.js"
import travelRequestRouter from "./routes/travelRequest.routes.js"
import companionRequestRouter from "./routes/companionRequest.routes.js"
import journeyRouter from "./routes/journey.routes.js"
import travelDocumentRouter from "./routes/travelDocument.routes.js"

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/profile", profileRouter)
app.use("/api/v1/create-travel-offers", travelOfferRouter)
app.use("/api/v1/travel-requests", travelRequestRouter)
app.use("/api/v1/companion-requests", companionRequestRouter)
app.use("/api/v1/journeys", journeyRouter)
app.use("/api/v1/travel-documents", travelDocumentRouter)
app.use(errorHandler)


app.get("/", (req, res) => {
    res.send("Hello !! You are using Express Js Framework")
})

export default app
