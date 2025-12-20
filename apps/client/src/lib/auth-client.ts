import { createAuthClient } from 'better-auth/react'
import { adminClient } from 'better-auth/client/plugins'
import { config } from './config'

export const authClient = createAuthClient({
  baseURL: config.apiUrl,
  plugins: [adminClient()],
})

export const {
  signIn,
  signUp,
  useSession,
  signOut,
  sendVerificationEmail,
  verifyEmail,
  requestPasswordReset,
  resetPassword,
  getSession,
} = authClient
