import { Response, Request } from "express"
import asyncHandler from "express-async-handler"
import { registerSchema } from "../schemas/userSchema"
import { prisma } from "../server"
import { ApiError } from "../utils/apiError"
import { ApiSuccess } from "../utils/apiSuccess"
import { HttpStatus } from "../utils/errorCodes"
import { hashSync } from "bcrypt"

export const registerUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  console.log("req.body", req.body)

  //Validation
  const result = registerSchema.safeParse(req.body)

  if (!result.success) {
    throw new ApiError(HttpStatus.BAD_REQUEST, "Validation Failed", result.error.errors)
  }

  const { email, name, password } = result.data

  //Check if user email already exist in DB
  const userExist = await prisma.user.findFirst({
    where: { email },
  })

  if (userExist) {
    throw new ApiError(HttpStatus.BAD_REQUEST, "Email has already been registered", null)
  }

  //create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  })

  if (user) {
    const successResponse = new ApiSuccess("User registered successfully", { ...user, token: null }, HttpStatus.CREATED)
    res.status(HttpStatus.CREATED).json(successResponse)
  } else {
    throw new ApiError(HttpStatus.BAD_REQUEST, "User creation failed", null)
  }
})
