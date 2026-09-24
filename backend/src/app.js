import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

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


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/profile", profileRouter)


app.get("/", (req, res) => {
    res.send("Hello Sir! You are using Express Js Framework")
})

export default app