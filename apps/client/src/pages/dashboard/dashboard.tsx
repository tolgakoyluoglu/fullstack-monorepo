import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CreateProjectDialog } from './create-project-dialog'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { Folder } from 'lucide-react'

export default function Dashboard() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await api.api.projects.get()
      if (response.error)
        throw new Error((response.error.value as string) || 'Error fetching projects')
      return response.data
    },
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Manage your tracking campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isLoading ? (
              <p className="text-sm text-gray-500">Loading projects...</p>
            ) : Array.isArray(projects) && projects.length > 0 ? (
              <div className="space-y-2">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Folder className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">{project.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">You don&apos;t have any projects yet.</p>
            )}
            <CreateProjectDialog />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest insights and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">No recent activity.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
