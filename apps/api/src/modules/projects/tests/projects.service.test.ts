import { describe, it, expect, mock } from 'bun:test'
import type { ProjectsRepository } from '../projects.repository'
import { ProjectsService } from '../projects.service'

const mockRepo = {
  createProject: mock(async (userId: string, name: string) => {
    return {
      id: 'test-id',
      userId,
      name,
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    }
  }),
  getProjects: mock(async (userId: string) => {
    return [
      {
        id: 'test-id',
        userId,
        name: 'Project 1',
        createdAt: new Date('2024-01-01T00:00:00.000Z'),
        updatedAt: new Date('2024-01-01T00:00:00.000Z'),
      },
    ]
  }),
} as unknown as ProjectsRepository

describe('ProjectsService', () => {
  const service = new ProjectsService(mockRepo)

  it('should create a project and return date strings', async () => {
    const result = await service.createProject('user-1', 'Test Project')

    expect(mockRepo.createProject).toHaveBeenCalledWith('user-1', 'Test Project')
    expect(result.createdAt).toBe('2024-01-01T00:00:00.000Z')
    expect(result.updatedAt).toBe('2024-01-01T00:00:00.000Z')
  })

  it('should get projects and return formatted list', async () => {
    const result = await service.getProjects('user-1')

    expect(mockRepo.getProjects).toHaveBeenCalledWith('user-1')
    expect(result).toHaveLength(1)
    expect(result?.[0]?.createdAt).toBe('2024-01-01T00:00:00.000Z')
  })
})
