import { AppError } from './errors'

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
    return {
      success: false,
      code: error.code,
      message: error.message,
      details: error.details,
    }
  }

  if (code === 'VALIDATION') {
    set.status = 400
    return {
      success: false,
      code: 'VALIDATION_ERROR',
      message: 'Validation failed',
      errors:
        typeof error === 'object' && error !== null && 'all' in error
          ? (error as { all: unknown[] }).all
          : [],
    }
  }

  if (error instanceof Error && error.message === 'Unauthorized') {
    set.status = 401
    return {
      success: false,
      code: 'UNAUTHORIZED',
      message: 'You must be logged in to perform this action',
    }
  }

  if (code === 'NOT_FOUND') {
    set.status = 404
    return {
      success: false,
      code: 'NOT_FOUND',
      message: 'Resource not found',
    }
  }

  console.error('SERVER_ERROR:', error)
  set.status = 500
  return {
    success: false,
    code: 'INTERNAL_SERVER_ERROR',
    message: 'An internal server error occurred',
  }
}
