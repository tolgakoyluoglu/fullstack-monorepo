import { db } from '@api/db'

interface ElysiaApp {
  stop: () => Promise<unknown> | void
}

interface PostgresClient {
  end: () => Promise<void>
}

export const gracefulShutdown = (app: ElysiaApp) => {
  const handleShutdown = async (signal: string) => {
    console.log(`Received ${signal}. Shutting down gracefully...`)

    try {
      const dbInternal = db as unknown as { $client?: PostgresClient }
      const client = dbInternal.$client
      if (client && typeof client.end === 'function') {
        await client.end()
        console.log('Database connection closed')
      }
    } catch (error) {
      console.error('Error closing database connection:', error)
    }

    await app.stop()
    process.exit(0)
  }

  process.on('SIGINT', () => handleShutdown('SIGINT'))
  process.on('SIGTERM', () => handleShutdown('SIGTERM'))
}
