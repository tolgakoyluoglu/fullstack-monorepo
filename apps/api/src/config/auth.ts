import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@api/db'
import * as schema from '@api/db/schema'
import { env } from '@api/config/env'
import { admin } from 'better-auth/plugins'
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from '@api/services/email/service'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: schema,
  }),
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await sendWelcomeEmail(user.email, user.name)
        },
      },
    },
  },
  plugins: [admin()],
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: true,
        defaultValue: 'user',
      },
    },
  },
  emailVerification: {
    enabled: true,
    sendVerificationEmail: async ({ user, url: _url, token }) => {
      const clientUrl = `${env.CLIENT_URL}/verify-email?token=${token}`
      await sendVerificationEmail(user.email, clientUrl)
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendResetPassword: async ({ user, url: _url, token }) => {
      const clientUrl = `${env.CLIENT_URL}/reset-password?token=${token}`
      await sendPasswordResetEmail(user.email, clientUrl)
    },
  },
  socialProviders:
    env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {},
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60,
    cookieCache: {
      enabled: false,
      maxAge: 5 * 60,
    },
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'lax',
      secure: true,
    },
  },
  trustedOrigins: [env.CLIENT_URL],
})
