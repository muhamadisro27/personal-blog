"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home } from "lucide-react"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"
import { setClassActive } from "@/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

const SidebarHome = () => {
  const currentURL = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"} className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <Typography
                  as="span"
                  className={cn(
                    "transition-all",
                    setClassActive(currentURL, "/", "font-bold pl-1")
                  )}
                >
                  Home
                </Typography>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarHome
