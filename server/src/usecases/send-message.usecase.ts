import type { CreateMessageInput } from '../repositories/message.repository.js'
import { MessageRepository } from '../repositories/message.repository.js'

export class SendMessageUseCase {
  private messageRepository: MessageRepository

  constructor(messageRepository?: MessageRepository) {
    this.messageRepository = messageRepository ?? new MessageRepository()
  }

  async execute(input: CreateMessageInput) {
    return this.messageRepository.create(input)
  }
}
