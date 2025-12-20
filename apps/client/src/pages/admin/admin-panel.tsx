import { useSuspenseQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { formatError } from '@monorepo/shared'

export default function AdminPanel() {
  const { data } = useSuspenseQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data, error } = await api.api.admin.stats.get()
      if (error) {
        throw new Error(formatError(error.value))
      }
      return data
    },
  })

  return <div>{data?.message || 'Admin status: Active'}</div>
}
