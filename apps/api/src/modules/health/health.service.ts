import { healthRepository, HealthRepository } from '@api/modules/health/health.repository'

export class HealthService {
  constructor(private readonly repo: HealthRepository = healthRepository) {}

  async getHealthStatus() {
    try {
      await this.repo.checkDatabase()

      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: 'connected',
      }
    } catch (error) {
      return {
        status: 'error',
        timestamp: new Date().toISOString(),
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }
}

export const healthService = new HealthService()
