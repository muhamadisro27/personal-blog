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
import { Home, Leaf, Send } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const SidebarPersonal = () => {
  const MENU_ITEMS = [
    {
      name: "About",
      url: "/about",
      icon: Leaf,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: Send,
    },
  ] as const

  const currentURL = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Personal</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={"/" === currentURL}>
              <Link href={"/"} className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {MENU_ITEMS.map((item) => {
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

export default SidebarPersonal
