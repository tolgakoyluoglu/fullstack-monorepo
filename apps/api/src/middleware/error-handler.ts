import { AppError, ErrorCode } from '@api/lib/errors'

export const errorHandler = ({
  code,
  error,
  set,
}: {
  code: string | number | unknown
  error: Error | { all?: unknown[] } | unknown
  set: { status?: number | string }
}) => {
  if (error instanceof AppError) {
    set.status = error.status
    return error.toJSON()
  }

  if (code === 'VALIDATION') {
    set.status = 422
    return {
      success: false,
      code: ErrorCode.VALIDATION_ERROR,
      message: 'Validation failed',
      details:
        typeof error === 'object' && error !== null && 'all' in error
          ? (error as { all: unknown[] }).all
          : [],
    }
  }

  if (code === 'NOT_FOUND') {
    set.status = 404
    return {
      success: false,
      code: ErrorCode.NOT_FOUND,
      message: 'Resource not found',
    }
  }

  console.error('SERVER_ERROR:', error)
  set.status = 500
  return {
    success: false,
    code: ErrorCode.INTERNAL_ERROR,
    message: 'An internal server error occurred',
  }
}
