"use client"
import { SidebarGroup, SidebarGroupLabel } from "@/components/atoms/Sidebar"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { PROFILES } from "@/utils/constant"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const SidebarProfile = ({ children }: Props) => {
  const { selectedProfile } = useSidebarStore()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{PROFILES[selectedProfile ?? 'personal'].title}</SidebarGroupLabel>
      {children}
    </SidebarGroup>
  )
}

export default SidebarProfile
