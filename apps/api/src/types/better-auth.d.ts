import 'better-auth'

declare module 'better-auth' {
  interface Session {
    user: {
      id: string
      email: string
      emailVerified: boolean
      name: string
      image?: string | null
      role: 'super-admin' | 'admin' | 'user'
      createdAt: Date
      updatedAt: Date
    }
  }
}
