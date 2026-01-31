import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { MessageController } from '../controllers/message.controller.js'
import { createMessageSchema } from '../schemas/message.schema.js'


type CreateMessageBody = {
  name: string
  email: string
  number: string
  message: string
}

export async function messageRoutes(fastify: FastifyInstance) {
  const controller = new MessageController()

  fastify.post('/messages', {
    schema: createMessageSchema,
    handler: (request: FastifyRequest<{ Body: CreateMessageBody }>, reply: FastifyReply) => controller.create(request, reply),
  })
}
