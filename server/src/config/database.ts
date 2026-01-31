import { DataSource } from 'typeorm'
import { Message } from '../entities/Message.js'

const isProduction = process.env.NODE_ENV === 'production'

const baseOptions = {
  type: 'postgres' as const,
  // synchronize: true creates/updates tables from entities (e.g. messages table)
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  entities: [Message],
  migrations: [],
}

export const AppDataSource = new DataSource(
  process.env.DATABASE_URL
    ? {
        ...baseOptions,
        url: process.env.DATABASE_URL,
        ssl: isProduction ? { rejectUnauthorized: false } : false,
      }
    : {
        ...baseOptions,
        host: process.env.DB_HOST ?? 'localhost',
        port: Number(process.env.DB_PORT ?? 5432),
        username: process.env.DB_USER ?? 'postgres',
        password: String(process.env.DB_PASSWORD ?? 'postgres'),
        database: process.env.DB_NAME ?? 'portfolio',
      }
)
