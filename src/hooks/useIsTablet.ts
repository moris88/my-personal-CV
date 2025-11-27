import { useEffect, useState } from 'react'

const useIsTablet = (breakpoint = 1024) => {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsTablet(window.innerWidth <= breakpoint)
    }

    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [breakpoint])

  return isTablet
}

export default useIsTablet
