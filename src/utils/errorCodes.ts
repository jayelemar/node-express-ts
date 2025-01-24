export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  SERVICE_UNAVAILABLE = 503,
}

export enum ErrorCode {
  NOT_FOUND = "NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  INVALID_INPUT = "INVALID_INPUT",
  SERVER_ERROR = "SERVER_ERROR",
  UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
}

export const HttpStatusToErrorCodeMap: Record<HttpStatus, ErrorCode> = {
  [HttpStatus.OK]: ErrorCode.UNEXPECTED_ERROR, // 200 OK - generic for success
  [HttpStatus.CREATED]: ErrorCode.UNEXPECTED_ERROR, // 201 Created - generic for success
  [HttpStatus.BAD_REQUEST]: ErrorCode.BAD_REQUEST,
  [HttpStatus.UNAUTHORIZED]: ErrorCode.UNAUTHORIZED,
  [HttpStatus.FORBIDDEN]: ErrorCode.UNAUTHORIZED, // 403 Forbidden - often related to authentication/authorization issues
  [HttpStatus.NOT_FOUND]: ErrorCode.NOT_FOUND,
  [HttpStatus.INTERNAL_SERVER_ERROR]: ErrorCode.INTERNAL_SERVER_ERROR,
  [HttpStatus.SERVICE_UNAVAILABLE]: ErrorCode.INTERNAL_SERVER_ERROR, // 503 Service Unavailable
  [HttpStatus.NOT_IMPLEMENTED]: ErrorCode.INTERNAL_SERVER_ERROR, // 501 Not Implemented
  [HttpStatus.ACCEPTED]: ErrorCode.UNEXPECTED_ERROR, // 202 Accepted
  [HttpStatus.NO_CONTENT]: ErrorCode.UNEXPECTED_ERROR, // 204 No Content
  [HttpStatus.METHOD_NOT_ALLOWED]: ErrorCode.UNEXPECTED_ERROR, // 405 Method Not Allowed
}
