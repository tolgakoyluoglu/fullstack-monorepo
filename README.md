# Project Boilerplate

Full-stack TypeScript monorepo with Elysia, React, and Drizzle.

## Prerequisites

- Node.js 20+
- Bun 1.2+ (for API execution and fast test running)
- Bun 1.2+ (for package management and Client execution)
- Docker (for PostgreSQL)

## Quick Start

1. Clone and install:

```bash
bun install
```

2. Set up environment:

```bash
# Set up Docker PostgreSQL
docker compose up -d

# API environment
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your values

# Client environment
cp apps/client/.env.example apps/client/.env
# Edit apps/client/.env with your values
```

3. Run database migrations:

```bash
bun run db:migrate
```

4. Start development:

```bash
bun run dev
```

## Available Scripts

- `bun run dev` - Start both apps
- `bun run dev:client` - Start frontend only
- `bun run dev:api` - Start backend only
- `bun run build` - Build for production
- `bun run lint` - Check code quality
- `bun run format` - Format code
- `bun run test` - Run all tests
- `bun run db:generate` - Generate migration files
- `bun run db:migrate` - Run migrations
- `bun run db:push` - Push schema to database (dev only)
- `bun run db:studio` - Open Drizzle Studio

## Tech Stack

**Backend:**

- Elysia (Bun framework)
- Drizzle ORM (PostgreSQL)
- Better Auth (authentication)
- TypeBox (validation)

**Frontend:**

- React 19
- Vite
- TanStack Query
- React Hook Form
- ShadCN UI
- Tailwind CSS

**Shared:**

- TypeScript
- bun workspaces

## Features

### Authentication

- Email/password authentication
- Google OAuth (optional)
- Session management
- Protected routes (Server & Client side)

### RBAC (Role-Based Access Control)

Three user roles with hierarchical permissions:

- **super-admin**
- **admin**
- **user**

Use role guards in your API routes:

```typescript
import { requireAdmin, requireSuperAdmin } from './lib/rbac'

app.use(requireAdmin).get('/admin/users', handler)
```

## Database Migrations

This project uses Drizzle migrations for PostgreSQL.

1. Modify schema in `apps/api/src/db/schema.ts`
2. Generate migration: `bun run db:generate`
3. Apply migration: `bun run db:migrate`

### Pre-Deployment Checklist

- [ ] Review all pending migrations in `apps/api/src/db/migrations/`
- [ ] Test migrations on a staging database
- [ ] Create database backup
- [ ] Verify rollback plan

### Migration Process

#### 1. Backup Database

```bash
# Create backup before migration
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql
```

#### 2. Run Migrations

```bash
# In CI/CD pipeline or manually
bun run db:migrate
```

#### 3. Verify Migration

```bash
# Check migration status
bunx drizzle-kit studio
```

### Rollback Strategy

If a migration fails:

1. **Stop the application** immediately
2. **Restore from backup**:
   ```bash
   psql $DATABASE_URL < backup_TIMESTAMP.sql
   ```
3. **Investigate the issue** in the migration file
4. **Fix and test** on staging before retrying

### CI/CD Integration

#### Recommended Flow

1. Build application
2. Run migrations (before starting app)
3. Start application

#### Example GitHub Actions

```yaml
- name: Run Database Migrations
  run: bun run db:migrate
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}

- name: Start Application
  run: bun run start
```

### Best Practices

- **Never** use `db:push` in production (it's for development only)
- **Always** generate migrations with `db:generate` and review them
- **Test** migrations on staging environment first
- **Keep** migration files in version control
- **Document** complex migrations with comments

## License

MIT
