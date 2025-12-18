import { Elysia } from 'elysia'
import { auth } from './auth'
import { Unauthorized } from './errors'

export const isAuthenticated = (app: Elysia) =>
  app.derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers })

    if (!session) {
      throw Unauthorized('You must be logged in to perform this action')
    }

    return {
      user: session.user,
      session: session.session,
    }
  })
