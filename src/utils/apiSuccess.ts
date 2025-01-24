import { HttpStatus } from "../utils/errorCodes"

export class ApiSuccess {
  status: string
  message?: string
  data: any
  httpStatus: HttpStatus

  constructor(message: string, data: any, httpStatus: HttpStatus = HttpStatus.OK) {
    this.status = "success"
    this.message = message
    this.data = data
    this.httpStatus = httpStatus
  }
}
