import { Type, Static } from '@sinclair/typebox'

export const UserRole = Type.Union([
  Type.Literal('super-admin'),
  Type.Literal('admin'),
  Type.Literal('user'),
])

export type UserRole = Static<typeof UserRole>

export const ROLE_HIERARCHY = {
  'super-admin': 3,
  admin: 2,
  user: 1,
} as const

export function hasRole(userRole: UserRole, requiredRole: UserRole): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole]
}

export function canManageUser(managerRole: UserRole, targetRole: UserRole): boolean {
  return ROLE_HIERARCHY[managerRole] > ROLE_HIERARCHY[targetRole]
}
