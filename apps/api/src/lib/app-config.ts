import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { logger } from '@bogeychan/elysia-logger'
import { helmet } from 'elysia-helmet'
import { rateLimit } from 'elysia-rate-limit'
import { errorHandler } from './error-handler'
import { auth } from './auth'
import { healthRoute } from '../modules/health/health.route'
import { projectsRoute } from '../modules/projects/projects.route'

export function createApp() {
  return new Elysia()
    .use(
      swagger({
        documentation: {
          info: {
            title: 'Elysia API',
            version: '1.0.0',
          },
        },
      })
    )
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
        max: 100,
      })
    )
    .use(
      cors({
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        credentials: true,
      })
    )
    .use(healthRoute)
    .get('/', () => 'Hello Elysia')
    .all('/api/auth/*', ({ request }) => auth.handler(request))
    .onError(errorHandler)
    .group('/api', (app) => app.use(projectsRoute))
}
