import { Elysia } from 'elysia'
import { projectsService, ProjectsService } from './projects.service'
import { CreateProjectSchema } from '@monorepo/shared'
import { isAuthenticated } from '@api/middleware/auth'
import { logger } from '@bogeychan/elysia-logger'

export const createProjectsRoute = (service: ProjectsService = projectsService) =>
  new Elysia({ prefix: '/projects' })
    .decorate('projectsService', service)
    .use(logger())
    .use(isAuthenticated)
    .get('/', async ({ projectsService, user, log }) => {
      const projects = await projectsService.getProjects(user.id)
      log.info({ userId: user.id }, 'Projects fetched successfully')
      return projects
    })
    .post(
      '/',
      async ({ projectsService, body, user, log }) => {
        const project = await projectsService.createProject(user.id, body.name)
        log.info({ projectId: project.id, userId: user.id }, 'Project created successfully')
        return project
      },
      {
        body: CreateProjectSchema,
      }
    )

export const projectsRoute = createProjectsRoute()
