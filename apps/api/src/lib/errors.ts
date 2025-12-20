import { ErrorCode, type ApiError } from '@monorepo/shared'

export class AppError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: ErrorCode,
    message: string,
    public readonly details?: unknown
  ) {
    super(message)
    this.name = 'AppError'
  }

  toJSON(): ApiError & { success: false } {
    return {
      success: false,
      status: this.status,
      code: this.code,
      message: this.message,
      details: this.details,
    }
  }
}

export const BadRequest = (message: string, details?: unknown) =>
  new AppError(400, ErrorCode.BAD_REQUEST, message, details)
export const Unauthorized = (message: string) => new AppError(401, ErrorCode.UNAUTHORIZED, message)
export const Forbidden = (message: string) => new AppError(403, ErrorCode.FORBIDDEN, message)
export const NotFound = (message: string) => new AppError(404, ErrorCode.NOT_FOUND, message)
export const Conflict = (message: string) => new AppError(409, ErrorCode.CONFLICT, message)
export const InternalError = (message: string) =>
  new AppError(500, ErrorCode.INTERNAL_ERROR, message)

export { ErrorCode } from '@monorepo/shared'
