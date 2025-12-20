import { db } from '@api/db'
import { sql } from 'drizzle-orm'

export class HealthRepository {
  constructor(private readonly database = db) {}

  async checkDatabase() {
    return await this.database.execute(sql`SELECT 1`)
  }
}

export const healthRepository = new HealthRepository()
