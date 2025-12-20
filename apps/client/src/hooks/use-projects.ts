import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { api } from '../lib/api'
import type { CreateProjectType } from '@monorepo/shared'
import { formatError } from '@monorepo/shared'

export function useSuspenseProjects() {
  return useSuspenseQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await api.api.projects.get()
      if (error) {
        throw new Error(formatError(error.value))
      }
      return data
    },
  })
}

export function useCreateProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: CreateProjectType) => {
      const { data, error } = await api.api.projects.post(payload)
      if (error) {
        throw new Error(formatError(error.value))
      }
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })
}
