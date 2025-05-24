"use client"
import React from "react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { Box, Home, PlayCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const SidebarMenus = () => {
  const menuItems = [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "Run Progress",
      url: "/run-progress",
      icon: PlayCircle,
    },
    {
      name: "Asset",
      url: "/asset",
      icon: Box,
    },
  ]

  const currentURL = usePathname()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
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
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarMenus
