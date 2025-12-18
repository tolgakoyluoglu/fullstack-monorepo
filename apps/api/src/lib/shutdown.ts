interface ElysiaApp {
  stop: () => Promise<unknown> | void
}

export const gracefulShutdown = (app: ElysiaApp) => {
  const handleShutdown = async (signal: string) => {
    console.log(`Received ${signal}. Shutting down gracefully...`)
    await app.stop()
    process.exit(0)
  }

  process.on('SIGINT', () => handleShutdown('SIGINT'))
  process.on('SIGTERM', () => handleShutdown('SIGTERM'))
}
