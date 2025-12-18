import { describe, it, expect, mock } from 'bun:test'
import { projectsService } from './projects.service'

// Mock the repository
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
}

mock.module('./projects.repository', () => ({
  projectsRepository: mockRepo,
}))

describe('ProjectsService', () => {
  it('should create a project and return date strings', async () => {
    const result = await projectsService.createProject('user-1', 'Test Project')

    expect(mockRepo.createProject).toHaveBeenCalledWith('user-1', 'Test Project')
    expect(result.createdAt).toBe('2024-01-01T00:00:00.000Z')
    expect(result.updatedAt).toBe('2024-01-01T00:00:00.000Z')
  })

  it('should get projects and return formatted list', async () => {
    const result = await projectsService.getProjects('user-1')

    expect(mockRepo.getProjects).toHaveBeenCalledWith('user-1')
    expect(result).toHaveLength(1)
    expect(result[0].createdAt).toBe('2024-01-01T00:00:00.000Z')
  })
})
