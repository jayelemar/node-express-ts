import dotenv from "dotenv"

dotenv.config({ path: ".env" })

export const PORT = process.env.PORT
export const NODE_ENV = process.env.NODE_ENV
