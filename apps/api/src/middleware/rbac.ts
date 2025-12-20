import { Elysia } from 'elysia'
import { Forbidden } from '@api/lib/errors'
import { UserRole, hasRole } from '@monorepo/shared'
import { isAuthenticated } from '@api/middleware/auth'

export const requireRole = (requiredRole: UserRole) => (app: Elysia) =>
  app.use(isAuthenticated).derive(async ({ user }) => {
    if (!hasRole(user.role as UserRole, requiredRole)) {
      throw Forbidden(`This action requires ${requiredRole} role`)
    }

    return { user }
  })

export const requireSuperAdmin = requireRole('super-admin')
export const requireAdmin = requireRole('admin')
