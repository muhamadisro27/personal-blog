"use client"
import React from "react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroupAction,
} from "@/components/ui/sidebar"
import { PlayIcon, Plus } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const SidebarRun = () => {
  const menuItems = [
    {
      name: "Run",
      url: "/run",
      icon: PlayIcon,
      hasActionButton: false,
    },
  ]

  const currentURL = usePathname()
  return (
    <SidebarGroup>
      <SidebarGroupLabel asChild>Run</SidebarGroupLabel>
      {/* <SidebarGroupAction title="Add Activities">
        <Plus /> <span className="sr-only">Add Activities</span>
      </SidebarGroupAction> */}
      {/* <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={item.url === currentURL}>
                  <Link href={item.url} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent> */}
    </SidebarGroup>
  )
}

export default SidebarRun
