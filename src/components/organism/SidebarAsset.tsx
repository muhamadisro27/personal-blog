"use client"
import {
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { ChartLine, Cuboid, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SidebarAsset = () => {
  const MENU_ITEMS = [
    {
      name: "Reksadana",
      url: "/reksadana",
      icon: ChartLine,
    },
    {
      name: "Gold",
      url: "/gold",
      icon: Cuboid,
    },
  ]

  const CURRENT_URL = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Asset</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={"/" === CURRENT_URL}>
              <Link href={"/"} className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {MENU_ITEMS.map((item) => {
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={item.url === CURRENT_URL}>
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

export default SidebarAsset
