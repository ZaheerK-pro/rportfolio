import 'reflect-metadata'
import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { AppDataSource } from './config/database.js'
import { messageRoutes } from './routes/message.routes.js'

const PORT = Number(process.env.PORT) || 3001

async function bootstrap() {
  try {
    await AppDataSource.initialize()
    console.log('📦 Database connected')

    const fastify = Fastify({ logger: true })

    await fastify.register(cors, { origin: true })
    fastify.get('/api/health', async () => ({ ok: true }))
    await fastify.register(messageRoutes, { prefix: '/api' })

    await fastify.listen({ port: PORT, host: '0.0.0.0' })
    console.log(`🚀 Server listening on port ${PORT}`)
  } catch (err) {
    console.error('❌ Startup failed', err)
    process.exit(1)
  }
}

bootstrap()
