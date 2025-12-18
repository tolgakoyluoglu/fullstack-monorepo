# Project Boilerplate

Full-stack TypeScript monorepo with Elysia, React, and Drizzle.

## Prerequisites

- Node.js 20+
- pnpm 9+
- Bun 1.0+

## Quick Start

1. Clone and install:

```bash
pnpm install
```

2. Set up environment:

```bash
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your values
```

3. Run database migrations:

```bash
pnpm db:push
```

4. Start development:

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start both apps
- `pnpm dev:client` - Start frontend only
- `pnpm dev:api` - Start backend only
- `pnpm build` - Build for production
- `pnpm lint` - Check code quality
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code
- `pnpm test` - Run all tests
- `pnpm test:api` - Run API tests
- `pnpm db:generate` - Generate migration files
- `pnpm db:migrate` - Run migrations
- `pnpm db:push` - Push schema to database
- `pnpm db:studio` - Open Drizzle Studio

## Environment Variables

See `apps/api/.env.example` for required variables:

- `BETTER_AUTH_SECRET` - Min 32 characters
- `BETTER_AUTH_URL` - Your API URL
- `GOOGLE_CLIENT_ID` - Optional, for OAuth
- `GOOGLE_CLIENT_SECRET` - Optional, for OAuth
- `SMTP_*` - Email service configuration

## Tech Stack

**Backend:**

- Elysia (Bun framework)
- Drizzle ORM (SQLite)
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
- pnpm workspaces
- ESLint + Prettier

## Deployment

### Docker

Build and run with Docker Compose:

```bash
docker-compose up --build
```

### Manual

1. Build:

```bash
pnpm build
```

2. Set environment variables in production

3. Run:

```bash
# API
cd apps/api && bun run src/index.ts

# Client (serve dist folder with nginx or similar)
```

## Project Structure

```
apps/
  api/          - Elysia backend
  client/       - React frontend
packages/
  shared/       - Shared TypeBox schemas
```

## License

MIT
