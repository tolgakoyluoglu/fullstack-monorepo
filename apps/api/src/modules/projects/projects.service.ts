import { projectsRepository } from './projects.repository'

export class ProjectsService {
  async createProject(userId: string, name: string) {
    const result = await projectsRepository.createProject(userId, name)
    return {
      ...result,
      createdAt: result.createdAt.toISOString(),
      updatedAt: result.updatedAt.toISOString(),
    }
  }

  async getProjects(userId: string) {
    const projects = await projectsRepository.getProjects(userId)
    return projects.map((p) => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    }))
  }
}

export const projectsService = new ProjectsService()
