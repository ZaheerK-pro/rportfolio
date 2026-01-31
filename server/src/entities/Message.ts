import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 255 })
  name!: string

  @Column({ type: 'varchar', length: 255 })
  email!: string

  @Column({ type: 'varchar', length: 50 })
  number!: string

  @Column({ type: 'text' })
  message!: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date
}
