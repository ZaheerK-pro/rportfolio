export const createMessageSchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'number', 'message'],
    properties: {
      name: { type: 'string', minLength: 1, maxLength: 255 },
      email: { type: 'string', format: 'email', maxLength: 255 },
      number: { type: 'string', minLength: 1, maxLength: 50 },
      message: { type: 'string', minLength: 1 },
    },
    additionalProperties: false,
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        email: { type: 'string' },
        number: { type: 'string' },
        message: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
      },
    },
    400: {
      type: 'object',
      properties: {
        statusCode: { type: 'number' },
        error: { type: 'string' },
        message: { type: 'string' },
      },
    },
  },
} as const
