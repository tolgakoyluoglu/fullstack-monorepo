import { Elysia } from 'elysia'
import { db } from '../../db'
import { sql } from 'drizzle-orm'

export const healthRoute = new Elysia({ prefix: '/health' }).get('/', async () => {
  try {
    const start = performance.now()
    await db.run(sql`SELECT 1`)
    const end = performance.now()

    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
      database: {
        status: 'UP',
        latency: `${(end - start).toFixed(2)}ms`,
      },
      uptime: process.uptime(),
    }
  } catch (error) {
    return {
      status: 'DOWN',
      timestamp: new Date().toISOString(),
      database: {
        status: 'DOWN',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
    }
  }
})
