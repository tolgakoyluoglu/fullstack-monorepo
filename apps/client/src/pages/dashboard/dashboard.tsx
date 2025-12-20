import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CreateProjectDialog } from './create-project-dialog'
import { useSuspenseProjects } from '@/hooks/use-projects'
import { Folder } from 'lucide-react'

export default function Dashboard() {
  const { data: projects } = useSuspenseProjects()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Manage your tracking campaigns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {projects.length === 0 ? (
              <p className="text-sm text-gray-500">You don&apos;t have any projects yet.</p>
            ) : (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Folder className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{project.name}</span>
                </div>
              ))
            )}
          </div>
          <CreateProjectDialog />
        </CardContent>
      </Card>
    </div>
  )
}
