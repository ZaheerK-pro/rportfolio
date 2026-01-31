import type { FastifyRequest, FastifyReply } from 'fastify'
import { SendMessageUseCase } from '../usecases/send-message.usecase.js'

type CreateMessageBody = {
  name: string
  email: string
  number: string
  message: string
}

export class MessageController {
  private sendMessageUseCase: SendMessageUseCase

  constructor(sendMessageUseCase?: SendMessageUseCase) {
    this.sendMessageUseCase = sendMessageUseCase ?? new SendMessageUseCase()
  }

  async create(
    request: FastifyRequest<{ Body: CreateMessageBody }>,
    reply: FastifyReply
  ) {
    const { name, email, number, message } = request.body
    const created = await this.sendMessageUseCase.execute({
      name,
      email,
      number,
      message,
    })
    return reply.status(201).send({
      id: created.id,
      name: created.name,
      email: created.email,
      number: created.number,
      message: created.message,
      createdAt: created.createdAt,
    })
  }
}
