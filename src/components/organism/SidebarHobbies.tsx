"use client"
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { SIDEBAR_MENUS } from "@/utils/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SidebarHobbies = () => {
  const currentURL = usePathname()

  return (
    <>
      {Object.values(SIDEBAR_MENUS.hobbies).map((item) => {
        return (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild isActive={item.url === currentURL}>
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </>
  )
}

export default SidebarHobbies
