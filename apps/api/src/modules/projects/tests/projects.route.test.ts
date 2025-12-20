import { describe, it, expect, mock } from 'bun:test'
import { createProjectsRoute } from '../projects.route'
import type { ProjectsService } from '../projects.service'
import { mockAuth } from '@test/mocks'

mockAuth()

describe('Projects Route (Integration)', () => {
  const mockService = {
    getProjects: mock(async (userId: string) => {
      return [
        {
          id: 'proj-1',
          userId,
          name: 'Mocked Project',
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
        },
      ]
    }),
    createProject: mock(async (userId: string, name: string) => {
      return {
        id: 'new-id',
        userId,
        name,
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
      }
    }),
  } as unknown as ProjectsService

  const app = createProjectsRoute(mockService)

  it('GET /projects should returns projects from injected service', async () => {
    const response = await app.handle(new Request('http://localhost/projects'))
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(mockService.getProjects).toHaveBeenCalledWith('test-user')
    expect(data[0].name).toBe('Mocked Project')
  })

  it('POST /projects should create project via injected service', async () => {
    const response = await app.handle(
      new Request('http://localhost/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'New App' }),
      })
    )
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(mockService.createProject).toHaveBeenCalledWith('test-user', 'New App')
    expect(data.name).toBe('New App')
  })
})
