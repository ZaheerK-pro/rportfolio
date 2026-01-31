import 'reflect-metadata'
import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { AppDataSource } from './config/database.js'
import { messageRoutes } from './routes/message.routes.js'

const PORT = Number(process.env.PORT)

async function bootstrap() {
  await AppDataSource.initialize()
  const fastify = Fastify({ logger: true })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(messageRoutes, { prefix: '/api' })

  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' })
    console.log(`Server listening on http://localhost:${PORT}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

bootstrap().catch((err) => {
  console.error(err)
  process.exit(1)
})
