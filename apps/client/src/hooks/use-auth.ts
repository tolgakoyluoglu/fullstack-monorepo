import { useSession as useBetterAuthSession, signIn, signUp, signOut } from '../lib/auth-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatError } from '@monorepo/shared'

export function useSession() {
  return useBetterAuthSession()
}

export function useSignIn() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const result = await signIn.email({ email, password })
      if (result.error) {
        throw new Error(formatError(result.error))
      }
      return result.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['session'] })
    },
  })
}

export function useSignUp() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      email,
      password,
      name,
    }: {
      email: string
      password: string
      name: string
    }) => {
      const result = await signUp.email({ email, password, name })
      if (result.error) {
        throw new Error(formatError(result.error))
      }
      return result.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['session'] })
    },
  })
}

export function useSignOut() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      await signOut()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['session'] })
    },
  })
}
