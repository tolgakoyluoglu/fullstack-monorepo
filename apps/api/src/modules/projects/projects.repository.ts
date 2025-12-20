import { db } from '@api/db'
import { project } from '@api/db/schema'
import { desc, eq } from 'drizzle-orm'
import { v4 as uuidv4 } from 'uuid'

export class ProjectsRepository {
  constructor(private readonly database = db) {}

  async getProjects(userId: string) {
    return this.database
      .select()
      .from(project)
      .where(eq(project.userId, userId))
      .orderBy(desc(project.createdAt))
  }

  async createProject(userId: string, name: string) {
    const timestamp = new Date()
    const newProject = await this.database
      .insert(project)
      .values({
        id: uuidv4(),
        userId,
        name,
        createdAt: timestamp,
        updatedAt: timestamp,
      })
      .returning()
    return newProject[0]
  }
}

export const projectsRepository = new ProjectsRepository()
