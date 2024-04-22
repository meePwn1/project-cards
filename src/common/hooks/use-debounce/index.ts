import { useCallback, useRef } from 'react'

export const useDebounce = (callback: () => void, delay = 300) => {
  const timer = useRef<null | number>(null)

  const debouncedCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = window.setTimeout(() => {
      callback()
    }, delay)
  }, [delay, callback])

  return debouncedCallback
}
