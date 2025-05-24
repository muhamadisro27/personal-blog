"use client"
import { ReactNode, useEffect } from "react"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { getOrSetSelectedProfileCookie } from "@/utils/cookie"

const AppInitializer = ({ children }: { children: ReactNode }) => {
  const selectedProfile = useSidebarStore((state) => state.selectedProfile)
  const setSelectedProfile = useSidebarStore(
    (state) => state.setSelectedProfile
  )

  useEffect(() => {
    if (!selectedProfile) {
      const profile = getOrSetSelectedProfileCookie()
      setSelectedProfile(profile)
    }
  }, [selectedProfile, setSelectedProfile])

  return <>{children}</>
}

export default AppInitializer
