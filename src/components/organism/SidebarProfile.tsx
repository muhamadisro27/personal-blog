"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { PROFILES } from "@/utils/constant"
import { ReactNode } from "react"

interface Props {
  sidebar: ReactNode
}

const SidebarProfile = ({ sidebar }: Props) => {
  const { selectedProfile } = useSidebarStore()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {PROFILES[selectedProfile ?? "personal"].title}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{sidebar}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarProfile
