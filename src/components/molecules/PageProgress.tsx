"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const PageProgress = () => {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999]">
      <div
        className={`h-full bg-primary/60 transition-all duration-500 ease-out ${
          loading ? "w-full" : "w-0"
        }`}
      />
    </div>
  )
}

export default PageProgress
