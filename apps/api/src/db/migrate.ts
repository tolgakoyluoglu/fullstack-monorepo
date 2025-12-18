import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import { db } from './index'

try {
  migrate(db, { migrationsFolder: './drizzle' })
  console.log('Migrations applied successfully')
} catch (e) {
  console.error('Migration failed', e)
  process.exit(1)
}
