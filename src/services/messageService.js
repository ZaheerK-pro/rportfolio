import { baseUrl } from '../config/baseUrl'

export async function sendMessage(payload) {
  const res = await fetch(`${baseUrl}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }))
    throw new Error(err.message ?? `Request failed: ${res.status}`)
  }

  return res.json()
}
