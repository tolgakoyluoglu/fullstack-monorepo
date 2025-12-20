import { Type, type Static } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

const EnvSchema = Type.Object({
  NODE_ENV: Type.Union(
    [Type.Literal('development'), Type.Literal('production'), Type.Literal('test')],
    {
      default: 'development',
    }
  ),
  PORT: Type.Number({ minimum: 1, maximum: 65535, default: 3000 }),
  DATABASE_URL: Type.String({ minLength: 1 }),
  BETTER_AUTH_SECRET: Type.String({ minLength: 32 }),
  BETTER_AUTH_URL: Type.String({ minLength: 1 }),
  CLIENT_URL: Type.String({ minLength: 1 }),
  GOOGLE_CLIENT_ID: Type.Optional(Type.String()),
  GOOGLE_CLIENT_SECRET: Type.Optional(Type.String()),
  SMTP_HOST: Type.Optional(Type.String()),
  SMTP_PORT: Type.Optional(Type.Number({ minimum: 1 })),
  SMTP_USER: Type.Optional(Type.String()),
  SMTP_PASS: Type.Optional(Type.String()),
  SMTP_FROM: Type.Optional(Type.String()),
})

type Env = Static<typeof EnvSchema>

function validateEnv(): Env {
  const rawEnv = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
  }

  if (process.env.NODE_ENV === 'test' || Bun.env.NODE_ENV === 'test') {
    return {
      NODE_ENV: 'test',
      PORT: 3000,
      DATABASE_URL: 'postgres://localhost:5432/test',
      BETTER_AUTH_SECRET: 'test-secret-12345678901234567890',
      BETTER_AUTH_URL: 'http://localhost:3000',
      CLIENT_URL: 'http://localhost:5173',
    } as Env
  }

  if (!Value.Check(EnvSchema, rawEnv)) {
    const errors = [...Value.Errors(EnvSchema, rawEnv)]
    console.error('❌ Invalid environment variables:')
    errors.forEach((error) => {
      console.error(`  - ${error.path}: ${error.message}`)
    })
    throw new Error('Invalid environment variables')
  }

  return rawEnv as Env
}

export const env = validateEnv()
