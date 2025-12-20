import { describe, it, expect } from 'bun:test'
import { AdminService } from '@api/modules/admin/admin.service'
import type { AdminRepository } from '@api/modules/admin/admin.repository'

describe('AdminService', () => {
  it('should return admin stats verification message', async () => {
    const mockRepo = {} as AdminRepository
    const service = new AdminService(mockRepo)
    const stats = await service.getStats()

    expect(stats.message).toBe('Admin access verified')
  })
})
