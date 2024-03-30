import { useEffect, useState } from 'react'

const MOBILE_CUTOFF = 420 // largest mobile screen width
const DESKTOP_CUTOFF = 1024 // smallest desktop screen width

const DEFAULT_SIZE = { width: 1024, height: 1000 }

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } else {
    return DEFAULT_SIZE
  }
}

export default function useScreenSizes() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    ...windowDimensions,
    isDesktop: windowDimensions.width >= DESKTOP_CUTOFF,
    isMobile: windowDimensions.width < MOBILE_CUTOFF,
  }
}
