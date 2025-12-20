import { mock } from 'bun:test'
import { Elysia } from 'elysia'

type User = {
  id: string
  email: string
}

export const mockAuth = (user: User = { id: 'test-user', email: 'test@example.com' }) => {
  mock.module('@api/middleware/auth', () => ({
    isAuthenticated: (app: Elysia) => app.decorate('user', user),
  }))
}
