"use client"
import { createElement, useEffect } from "react"
import { Box } from "@/components/atoms/Box"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/atoms/Dropdown"
import { Skeleton } from "@/components/atoms/Skeleton"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  findProfileByCurrentUrl,
  setClassActive,
  setDefaultValue,
} from "@/utils"
import { ChevronsUpDown } from "lucide-react"
import { PROFILES, SIDEBAR_MENUS } from "@/utils/constant"
import { TProfile } from "@/types"
import { Typography } from "@/components/atoms/Typography"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { usePathname, useRouter } from "next/navigation"
import { getSelectedProfileFromCookie } from "@/utils/cookie"
import { useIsMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"

const SidebarDropdown = () => {
  const selectedProfile = useSidebarStore(
    (state) => state.selectedProfile ?? "personal"
  )

  const router = useRouter()
  const currentURL = usePathname()
  const isMobile = useIsMobile()
  const { setOpenMobile } = useSidebar()

  const { setSelectedProfile, loading } = useSidebarStore()
  const handleSelectProfile = (profile: TProfile) => {
    if (profile === selectedProfile) return

    setSelectedProfile(profile)

    if (currentURL !== "/" && profile === "personal") return router.push("/")
    if (currentURL !== "/") {
      if (isMobile) {
        setOpenMobile(false)
      }

      router.push(SIDEBAR_MENUS[profile][0].url)
      return
    }
  }

  useEffect(() => {
    const findCurrentProfile = findProfileByCurrentUrl(currentURL) as TProfile
    const existingProfile = getSelectedProfileFromCookie()

    if (findCurrentProfile === undefined) return setSelectedProfile("personal")

    if (findCurrentProfile === existingProfile) return

    setSelectedProfile(findCurrentProfile)
  }, [currentURL, setSelectedProfile, isMobile])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {loading ? (
          <Box className="flex items-center space-x-2 px-2 py-4">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="w-full h-4 " />
            <Skeleton className="h-4 w-4 rounded-full" />
          </Box>
        ) : (
          <DropdownMenu>
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
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-6 focus-visible:ring-0">
                  {createElement(PROFILES[selectedProfile].icon)}
                  {setDefaultValue(
                    PROFILES[selectedProfile].title,
                    "Select Personal"
                  )}
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </motion.div>
            <DropdownMenuContent
              side={isMobile ? "bottom" : "right"}
              className={`${isMobile ? "" : "ml-4 mt-2"}`}
            >
              {Object.values(PROFILES).map((profile) => {
                return (
                  <DropdownMenuItem
                    data-active={setClassActive<TProfile>(
                      selectedProfile,
                      profile.value
                    )}
                    onClick={() => handleSelectProfile(profile.value)}
                    key={profile.title}
                    className="py-4 cursor-pointer data-[active=true]:bg-accent"
                  >
                    <profile.icon
                      data-active={setClassActive<TProfile>(
                        selectedProfile,
                        profile.value
                      )}
                      className="data-[active=true]:dark:text-primary/70"
                    />
                    <Typography
                      as="span"
                      data-active={setClassActive<TProfile>(
                        selectedProfile,
                        profile.value
                      )}
                      className="data-[active=true]:font-bold data-[active=true]:dark:text-primary/70"
                    >
                      {profile.title}
                    </Typography>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default SidebarDropdown
