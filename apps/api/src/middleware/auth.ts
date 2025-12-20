import { Elysia } from 'elysia'
import { auth } from '@api/config/auth'
import { Unauthorized } from '@api/lib/errors'

export const isAuthenticated = new Elysia({ name: 'auth-middleware' }).derive(
  { as: 'global' },
  async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers })

    if (!session) {
      throw Unauthorized('You must be logged in to perform this action')
    }

    return {
      user: session.user,
      session: session.session,
    }
  }
)
