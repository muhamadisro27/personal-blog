"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Home } from "lucide-react"
import { Typography } from "@/components/atoms/Typography"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { Skeleton } from "@/components/atoms/Skeleton"
import { Box } from "@/components/atoms/Box"
import { MouseEvent } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const SidebarHome = () => {
  const currentURL = usePathname()
  const { loading } = useSidebarStore()
  const router = useRouter()
  const isMobile = useIsMobile()
  const { setOpenMobile } = useSidebar()

  const setActive = () => {
    if (!loading && "/" === currentURL) return true

    return false
  }

  const handleClickLink = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()

    router.push(url)

    if (isMobile) setOpenMobile(false)
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={setActive()} className="py-6 data-[active=true]:bg-accent">
              {loading ? (
                <Box className="w-full py-4 px-2">
                  <Skeleton className="w-full h-3.5" />
                </Box>
              ) : (
                <Link
                  onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                    handleClickLink(e, "/")
                  }
                  href={"/"}
                  className="flex items-center gap-2"
                >
                  <Home
                    data-active={setActive()}
                    className="w-4 h-4 data-[active=true]:dark:text-primary"
                  />
                  <Typography
                    as="span"
                    data-active={setActive()}
                    className={
                      "transition-all pl-0 data-[active=true]:font-bold data-[active=true]:pl-1 data-[active=true]:dark:text-primary"
                    }
                  >
                    Home
                  </Typography>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarHome
