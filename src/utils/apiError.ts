import { HttpStatus, ErrorCode, HttpStatusToErrorCodeMap } from "../utils/errorCodes"

export class ApiError extends Error {
  status: HttpStatus
  code: ErrorCode
  details?: any

  constructor(status: HttpStatus, message: string, details: any) {
    super(message)
    this.status = status
    this.code = HttpStatusToErrorCodeMap[status] || ErrorCode.UNEXPECTED_ERROR
    this.details = details
    this.name = this.constructor.name
  }
}
