"use client"
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { SIDEBAR_MENUS } from "@/utils/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Typography } from "../atoms/Typography"
import { cn } from "@/lib/utils"
import { setClassActive } from "@/utils"

const SidebarAsset = () => {
  const currentURL = usePathname()

  return (
    <>
      {Object.values(SIDEBAR_MENUS.asset).map((item) => {
        return (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild isActive={item.url === currentURL}>
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <Typography
                  className={cn(
                    "transition-all",
                    setClassActive(currentURL, item.url, "font-bold pl-1")
                  )}
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

export default SidebarAsset
