import { Router } from "express"
import { registerUser } from "../controllers/userController"

const userRoutes: Router = Router()

userRoutes.post("/register", registerUser)

export default userRoutes
