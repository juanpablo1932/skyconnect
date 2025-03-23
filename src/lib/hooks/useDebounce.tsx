import { useEffect, useState } from 'react'

export default function useDebounce(value: string, initialValue = '') {
  const [state, setState] = useState(initialValue)
  const delay = 500;

  useEffect(() => {
    const timer = setTimeout(() => setState(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return state
}