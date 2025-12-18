import { createApp } from './lib/app-config'
import { gracefulShutdown } from './lib/shutdown'

const app = createApp().listen(3000)
export type App = typeof app

console.log(`🦊 API is running at ${app.server?.hostname}:${app.server?.port}`)
gracefulShutdown(app)
