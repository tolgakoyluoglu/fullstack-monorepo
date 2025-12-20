import { describe, it, expect, mock } from 'bun:test'
import { HealthService } from '@api/modules/health/health.service'
import type { HealthRepository } from '@api/modules/health/health.repository'

describe('HealthService', () => {
  it('should return ok when database check passes', async () => {
    const mockRepo = {
      checkDatabase: mock(async () => ({})),
    } as unknown as HealthRepository

    const service = new HealthService(mockRepo)
    const status = await service.getHealthStatus()

    expect(status.status).toBe('ok')
    expect(status.database).toBe('connected')
    expect(mockRepo.checkDatabase).toHaveBeenCalled()
  })

  it('should return error when database check fails', async () => {
    const mockRepo = {
      checkDatabase: mock(async () => {
        throw new Error('Connection failed')
      }),
    } as unknown as HealthRepository

    const service = new HealthService(mockRepo)
    const status = await service.getHealthStatus()

    expect(status.status).toBe('error')
    expect(status.database).toBe('disconnected')
    expect(status.error).toBe('Connection failed')
  })
})
