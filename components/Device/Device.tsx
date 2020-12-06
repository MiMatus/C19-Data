import React, { useEffect, useState } from "react"

interface DeviceProps {
  device: "mobile" | "tablet" | "desktop"
}

export const DeviceSizes = {
  mobile: { min: null, max: 481 },
  tablet: { min: 481, max: 901 },
  desktop: { min: 901, max: null },
}

export const Device: React.FC<DeviceProps> = ({ children, device }) => {
  const [windowWidth, setWindowSize] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (
    windowWidth &&
    (DeviceSizes[device].min === null ||
      windowWidth >= DeviceSizes[device].min) &&
    (DeviceSizes[device].max === null || windowWidth < DeviceSizes[device].max)
  ) {
    return <>{children}</>
  }
  return null
}
