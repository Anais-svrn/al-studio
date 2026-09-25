import { useState } from 'react'

export const useToast = () => {
  const [message, setMessage] = useState<string>('')
  const show = (next: string) => {
    setMessage(next)
    setTimeout(() => setMessage(''), 2200)
  }

  return { message, show }
}
