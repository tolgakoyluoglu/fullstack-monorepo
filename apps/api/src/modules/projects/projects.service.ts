import { projectsRepository } from './projects.repository'
import { formatTimestamp } from '@api/lib/timestamp'
import { InternalError } from '@api/lib/errors'

export class ProjectsService {
  constructor(private readonly repo = projectsRepository) {}

  async createProject(userId: string, name: string) {
    const result = await this.repo.createProject(userId, name)
    if (!result) {
      throw InternalError('Failed to create project')
    }
    return {
      ...result,
      createdAt: formatTimestamp(result.createdAt),
      updatedAt: formatTimestamp(result.updatedAt),
    }
  }

  async getProjects(userId: string) {
    const projects = await this.repo.getProjects(userId)
    if (!projects) {
      throw InternalError('Failed to get projects')
    }
    return projects.map((p) => ({
      ...p,
      createdAt: formatTimestamp(p.createdAt),
      updatedAt: formatTimestamp(p.updatedAt),
    }))
  }
}

export const projectsService = new ProjectsService()
