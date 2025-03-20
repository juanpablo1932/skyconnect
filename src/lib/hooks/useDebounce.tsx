import { useEffect, useState } from 'react'

export default function useDebounce(value: string, delay: number, initialValue = '') {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => setState(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return state
}