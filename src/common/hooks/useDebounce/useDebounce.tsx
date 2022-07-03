import { useEffect, useState } from 'react'

interface IUseDebounce {
  value?: any
  delay: number
}

const useDebounce = ({ value, delay }: IUseDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export default useDebounce
