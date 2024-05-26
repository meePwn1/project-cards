import { useEffect, useState } from 'react'

type BreakpointMode = 'max' | 'min'

export const useBreakpoint = (breakpoint: number, mode: BreakpointMode = 'max') => {
  const [matches, setMatches] = useState(() => {
    return mode === 'max' ? window.innerWidth < breakpoint : window.innerWidth > breakpoint
  })

  useEffect(() => {
    const resizeCallback = () => {
      setMatches(mode === 'max' ? window.innerWidth < breakpoint : window.innerWidth > breakpoint)
    }

    window.addEventListener('resize', resizeCallback)

    return () => window.removeEventListener('resize', resizeCallback)
  }, [breakpoint, mode])

  return matches
}
