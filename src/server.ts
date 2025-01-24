import express, { Express } from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import rootRouter from "./routes"
import { errorHandler } from "./middlewares/errorMiddleware"

dotenv.config()
const app: Express = express()

// Database connection
// connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite
      "http://localhost:3000", // Next.js
      "https://your-frontend-website.com",
    ],
    credentials: true,
  })
)

export const prisma = new PrismaClient({
  log: ["query"],
})

app.use(errorHandler)

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World, from TypeScript Express Server!")
})

app.use("/api", rootRouter)

// Export the Express app instance
export default app
