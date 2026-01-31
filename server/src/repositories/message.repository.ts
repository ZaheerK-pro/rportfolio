import { Repository } from 'typeorm'
import { AppDataSource } from '../config/database.js'
import { Message } from '../entities/Message.js'

export type CreateMessageInput = {
  name: string
  email: string
  number: string
  message: string
}

export class MessageRepository {
  private repo: Repository<Message>

  constructor() {
    this.repo = AppDataSource.getRepository(Message)
  }

  async create(data: CreateMessageInput): Promise<Message> {
    const message = this.repo.create(data)
    return this.repo.save(message)
  }

  async findById(id: string): Promise<Message | null> {
    return this.repo.findOne({ where: { id } })
  }
}
