"use client"
import {
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { PersonStanding, Home, BookOpenCheck } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SidebarHobbies = () => {
  const MENU_ITEMS = [
    {
      name: "Run Activities",
      url: "/run-activities",
      icon: PersonStanding,
    },
    {
      name: "Books",
      url: "/books",
      icon: BookOpenCheck,
    },
  ]

  const currentURL = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Hobbies</SidebarGroupLabel>
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

export default SidebarHobbies
