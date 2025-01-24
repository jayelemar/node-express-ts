// src/middleware/errorHandler.ts
import { NextFunction, Request, Response } from "express"
import { HttpStatus } from "../utils/errorCodes"
import { ApiError } from "../utils/apiError"

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  let statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
  let message = "Internal Server Error"
  let code = "INTERNAL_SERVER_ERROR"
  let details = null

  if (err instanceof ApiError) {
    statusCode = err.status
    message = err.message
    code = err.code
    details = err.details
  } else if (err instanceof Error) {
    message = err.message
    if (process.env.NODE_ENV === "development") {
      details = err.stack
    }
  }

  if (process.env.NODE_ENV === "development" && err instanceof Error) {
    console.error(err.stack)
  }

  res.status(statusCode).json({
    status: "error",
    message,
    code,
    details,
  })
}
