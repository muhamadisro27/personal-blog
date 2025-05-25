"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { PROFILES, SIDEBAR_MENUS } from "@/utils/constant"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Typography } from "../atoms/Typography"
import { cn } from "@/lib/utils"
import { setClassActive } from "@/utils"
import { Skeleton } from "@/components/atoms/Skeleton"
import Box from "@/components/atoms/Box/Box"
import { Fragment } from "react"

const SidebarProfile = () => {
  const { selectedProfile, loading } = useSidebarStore()
  const currentURL = usePathname()
  const profile = selectedProfile ?? "personal"

  const renderSidebarMenuItem = () => {
    return Object.values(SIDEBAR_MENUS[profile]).map((item, index) => {
      if (loading) {
        return (
          <Fragment key={index}>
            <Box className="w-full py-1 px-2">
              <Skeleton className="w-full h-3" />
            </Box>
          </Fragment>
        )
      }

      return (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton asChild isActive={item.url === currentURL}>
            {loading ? (
              <Skeleton className="rounded-full w-[200px] h-4" />
            ) : (
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
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      )
    })
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {loading ? (
          <Skeleton className="rounded-full w-[70px] h-3" />
        ) : (
          <>{PROFILES[profile].title}</>
        )}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{renderSidebarMenuItem()}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarProfile
