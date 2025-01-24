import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(2, "Name should be at least 2 characters long").max(20, "Username should not exceed 20 characters"),
  email: z.string().email("Please provide a valid email"),
  password: z.string().min(8, "Password should be at least 8 characters long"),
})
