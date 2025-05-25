"use client"
import { ReactNode, useEffect } from "react"
import { useSidebarStore } from "@/stores/useSidebarStore"

const AppInitializer = ({ children }: { children: ReactNode }) => {
  const { initializeProfile } = useSidebarStore()

  useEffect(() => {
    initializeProfile()
  }, [initializeProfile])

  return <>{children}</>
}

export default AppInitializer
