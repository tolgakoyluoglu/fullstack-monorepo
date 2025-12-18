export class AppError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const BadRequest = (message: string, code = 'BAD_REQUEST', details?: unknown) =>
  new AppError(400, code, message, details)

export const Unauthorized = (message = 'Unauthorized', code = 'UNAUTHORIZED') =>
  new AppError(401, code, message)

export const Forbidden = (message = 'Forbidden', code = 'FORBIDDEN') =>
  new AppError(403, code, message)

export const NotFound = (message = 'Resource not found', code = 'NOT_FOUND') =>
  new AppError(404, code, message)

export const InternalServerError = (
  message = 'Internal Server Error',
  code = 'INTERNAL_SERVER_ERROR'
) => new AppError(500, code, message)
