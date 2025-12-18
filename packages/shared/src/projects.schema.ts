import { Type, type Static } from '@sinclair/typebox'

export const CreateProjectSchema = Type.Object({
  name: Type.String({ minLength: 1, maxLength: 100 }),
})

export type CreateProjectType = Static<typeof CreateProjectSchema>

export const Project = Type.Object({
  id: Type.String(),
  userId: Type.String(),
  name: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
})

export type ProjectType = Static<typeof Project>
