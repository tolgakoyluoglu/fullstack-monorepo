import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { typeboxResolver } from '@hookform/resolvers/typebox'
import { CreateProjectSchema, type CreateProjectType } from '@monorepo/shared'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateProject } from '@/hooks/use-projects'

export function CreateProjectDialog() {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<CreateProjectType>({
    resolver: typeboxResolver(CreateProjectSchema),
  })

  const createProject = useCreateProject()

  const onSubmit = (data: CreateProjectType) => {
    createProject.mutate(data, {
      onSuccess: () => {
        setOpen(false)
        reset()
      },
      onError: (err) => {
        setError('root', { message: err.message })
      },
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)} className="mt-4">
        Create Project
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>Create a new project to start tracking your topics.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input id="name" placeholder="My Awesome Project" {...register('name')} />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          {errors.root && <p className="text-sm text-red-500">{errors.root.message}</p>}
          <DialogFooter>
            <Button type="submit" disabled={createProject.isPending}>
              {createProject.isPending ? 'Creating...' : 'Create Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
