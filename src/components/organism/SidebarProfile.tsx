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
import { Box } from "@/components/atoms/Box"
import { Fragment } from "react"
import { motion } from "framer-motion"

const SidebarProfile = () => {
  const { selectedProfile, loading } = useSidebarStore()
  const currentURL = usePathname()
  const profile = selectedProfile ?? "personal"

  const renderSidebarMenuItem = () => {
    return Object.values(SIDEBAR_MENUS[profile]).map((item, index) => {
      if (loading) {
        return (
          <Fragment key={index}>
            <Box className="w-full py-4 px-2">
              <Skeleton className="w-full h-3.5" />
            </Box>
          </Fragment>
        )
      }

      return (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          key={item.label}
        >
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={item.url === currentURL}
              className="py-6"
            >
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
        </motion.div>
      )
    })
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {loading ? (
          <Skeleton className="rounded-full w-[70px] h-3" />
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(2px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Typography as="span" className="text-sm">
              {PROFILES[profile].title}
            </Typography>
          </motion.div>
        )}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{renderSidebarMenuItem()}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarProfile
