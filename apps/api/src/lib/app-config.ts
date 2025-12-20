import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { logger } from '@bogeychan/elysia-logger'
import { helmet } from 'elysia-helmet'
import { rateLimit } from 'elysia-rate-limit'
import { errorHandler } from '@api/middleware/error-handler'
import { auth } from '@api/config/auth'
import { createHealthRoute } from '@api/modules/health/health.route'
import { createProjectsRoute } from '@api/modules/projects/projects.route'
import { createAdminRoute } from '@api/modules/admin/admin.route'
import { env } from '@api/config/env'

export function createApp() {
  const app = new Elysia()
    .use(
      cors({
        origin: [env.CLIENT_URL],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        maxAge: 86400,
      })
    )
    .mount(auth.handler)

  if (env.NODE_ENV === 'development') {
    app.use(
      swagger({
        documentation: {
          info: {
            title: 'Elysia API',
            version: '1.0.0',
          },
        },
      })
    )
  }

  return app
    .use(
      logger({
        level: 'info',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      })
    )
    .use(helmet())
    .use(
      rateLimit({
        duration: 60000,
        max: 60,
      })
    )
    .use(createHealthRoute())
    .get('/', () => 'Hello Elysia')
    .onError(errorHandler)
    .group('/api', (app) => app.use(createProjectsRoute()).use(createAdminRoute()))
}

export type App = ReturnType<typeof createApp>
