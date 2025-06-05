"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { PROFILES, SIDEBAR_MENUS } from "@/utils/constant"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Typography } from "../atoms/Typography"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/atoms/Skeleton"
import { Box } from "@/components/atoms/Box"
import { Fragment, MouseEvent } from "react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const SidebarProfile = () => {
  const { selectedProfile, loading } = useSidebarStore()
  const isMobile = useIsMobile()
  const { setOpenMobile } = useSidebar()
  const profile = selectedProfile ?? "personal"
  const currentURL = usePathname()
  const router = useRouter()

  const normalizePath = (path: string) =>
    path.endsWith("/") ? path.slice(0, -1) : path

  const setActive = (url: string) => {
    const current = normalizePath(currentURL)
    const target = normalizePath(url)
    return current === target || current.startsWith(`${target}/`)
  }

  const handleClickLink = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()

    router.push(url)

    if (isMobile) setOpenMobile(false)
  }

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
            duration: 0.8,
            ease: "easeInOut",
          }}
          exit={{
            opacity: 0,
          }}
          key={item.label}
        >
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={item.label}
              isActive={setActive(item.url)}
              className="py-6 data-[active=true]:bg-accent"
            >
              <Link
                onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                  handleClickLink(e, item.url)
                }
                href={item.url}
                className="flex items-center gap-2"
              >
                <item.icon
                  data-active={setActive(item.url)}
                  className="w-4 h-4 data-[active=true]:dark:text-primary"
                />
                <Typography
                  data-active={setActive(item.url)}
                  className={cn(
                    "transition-all pl-0 data-[active=true]:font-bold data-[active=true]:pl-1 data-[active=true]:dark:text-primary"
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
