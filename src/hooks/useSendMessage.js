import { useState, useCallback } from 'react'
import { sendMessage } from '../services/messageService'

export function useSendMessage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const send = useCallback(async (payload) => {
    setLoading(true)
    setError(null)
    try {
      await sendMessage(payload)
    } catch (e) {
      setError(e.message ?? 'Failed to send message')
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  return { send, loading, error }
}
