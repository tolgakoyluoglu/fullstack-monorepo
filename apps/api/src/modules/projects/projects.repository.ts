import { db } from '../../db'
import { project } from '../../db/schema'
import { eq, desc } from 'drizzle-orm'
import { v4 as uuidv4 } from 'uuid'

export class ProjectsRepository {
  async createProject(userId: string, name: string) {
    const timestamp = new Date()
    const newProject = await db
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

  async getProjects(userId: string) {
    return db
      .select()
      .from(project)
      .where(eq(project.userId, userId))
      .orderBy(desc(project.createdAt))
  }
}

export const projectsRepository = new ProjectsRepository()
