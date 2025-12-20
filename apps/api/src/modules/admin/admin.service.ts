import { adminRepository, AdminRepository } from '@api/modules/admin/admin.repository'

export class AdminService {
  constructor(private readonly repo: AdminRepository = adminRepository) {}

  async getStats() {
    return {
      message: 'Admin access verified',
    }
  }
}

export const adminService = new AdminService()
