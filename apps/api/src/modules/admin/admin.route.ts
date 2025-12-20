import { Elysia } from 'elysia'
import { requireAdmin } from '@api/middleware/rbac'
import { adminService, AdminService } from '@api/modules/admin/admin.service'

export const createAdminRoute = (service: AdminService = adminService) =>
  new Elysia({ prefix: '/admin' })
    .decorate('adminService', service)
    .use(requireAdmin)
    .get('/stats', async ({ adminService }) => {
      return await adminService.getStats()
    })

export const adminRoute = createAdminRoute()
