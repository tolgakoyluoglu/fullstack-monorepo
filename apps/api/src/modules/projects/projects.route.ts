import { Elysia } from 'elysia'
import { projectsService } from './projects.service'
import { CreateProjectSchema } from '@aeo/shared'
import { isAuthenticated } from '../../lib/middleware'
import { logger } from '@bogeychan/elysia-logger'

export const projectsRoute = new Elysia({ prefix: '/projects' })
  .use(logger())
  .use(isAuthenticated)
  .post(
    '/',
    async ({ body, user, log }) => {
      const project = await projectsService.createProject(user.id, body.name)
      log.info({ projectId: project.id, userId: user.id }, 'Project created successfully')
      return project
    },
    {
      body: CreateProjectSchema,
    }
  )
  .get('/', async ({ user }) => {
    return projectsService.getProjects(user.id)
  })
