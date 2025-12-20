import { Elysia } from 'elysia'
import { healthService, HealthService } from '@api/modules/health/health.service'

export const createHealthRoute = (service: HealthService = healthService) =>
  new Elysia({ prefix: '/health' })
    .decorate('healthService', service)
    .get('/', async ({ healthService }) => {
      return await healthService.getHealthStatus()
    })

export const healthRoute = createHealthRoute()
