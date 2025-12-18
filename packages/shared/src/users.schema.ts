import { Type, type Static } from '@sinclair/typebox'

export const User = Type.Object({
  id: Type.String(),
  email: Type.String({ format: 'email' }),
  name: Type.String(),
  createdAt: Type.String(),
})

export const SignUpSchema = Type.Object({
  name: Type.String({ minLength: 2, errorMessage: 'Name must be at least 2 characters' }),
  email: Type.String({ format: 'email', errorMessage: 'Invalid email address' }),
  password: Type.String({ minLength: 8, errorMessage: 'Password must be at least 8 characters' }),
})

export const SignInSchema = Type.Object({
  email: Type.String({ format: 'email', errorMessage: 'Invalid email address' }),
  password: Type.String({ minLength: 1, errorMessage: 'Password is required' }),
})

export type UserType = Static<typeof User>
export type SignInType = Static<typeof SignInSchema>
export type SignUpType = Static<typeof SignUpSchema>
