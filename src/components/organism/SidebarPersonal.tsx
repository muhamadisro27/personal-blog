"use client"
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SIDEBAR_MENUS } from "@/utils/constant"
import { cn } from "@/lib/utils"
import { setClassActive } from "@/utils"
import { Typography } from "@/components/atoms/Typography"

const SidebarPersonal = () => {
  const currentURL = usePathname()

  return (
    <>
      {Object.values(SIDEBAR_MENUS.personal).map((item) => {
        return (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild isActive={item.url === currentURL}>
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <Typography
                  as="span"
                  className={cn('transition-all', setClassActive(currentURL, item.url, "font-bold pl-1"))}
                >
                  {item.label}
                </Typography>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </>
  )
}

export default SidebarPersonal
