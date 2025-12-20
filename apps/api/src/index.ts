import { createApp } from '@api/lib/app-config'
import { gracefulShutdown } from '@api/lib/shutdown'
import { env } from '@api/config/env'

const app = createApp().listen(env.PORT)
export type App = typeof app

console.log(`🦊 API is running at ${app.server?.hostname}:${app.server?.port}`)
console.log(`🦊 Email server is running at http://localhost:8025`)

gracefulShutdown(app)
