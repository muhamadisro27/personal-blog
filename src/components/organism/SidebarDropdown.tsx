"use client"
import { createElement } from "react"
import Box from "@/components/atoms/Box/Box"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/atoms/Dropdown"
import { Skeleton } from "@/components/atoms/Skeleton"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { setClassActive, setDefaultValue } from "@/utils"
import { ChevronsUpDown } from "lucide-react"
import { PROFILES, SIDEBAR_MENUS } from "@/utils/constant"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { TProfile } from "@/types"
import { Typography } from "@/components/atoms/Typography"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { usePathname, useRouter } from "next/navigation"

const SidebarDropdown = () => {
  const selectedProfile = useSidebarStore(
    (state) => state.selectedProfile ?? "personal"
  )

  const router = useRouter()
  const currentURL = usePathname()
  const { setSelectedProfile, loading } = useSidebarStore()
  const handleSelectProfile = (profile: TProfile) => {
    if (profile === selectedProfile) return

    setSelectedProfile(profile)
    if (currentURL !== "/" && profile === "personal") return router.push("/")
    if (currentURL !== "/") return router.push(SIDEBAR_MENUS[profile][0].url)
  }
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
            <DropdownMenuContent>
              {Object.values(PROFILES).map((profile) => {
                return (
                  <DropdownMenuItem
                    onClick={() => handleSelectProfile(profile.value)}
                    key={profile.title}
                    className={cn(
                      "py-4",
                      setClassActive<TProfile>(
                        selectedProfile,
                        profile.value,
                        "font-bold bg-sidebar-accent"
                      )
                    )}
                  >
                    <profile.icon />
                    <Typography as="span">{profile.title}</Typography>
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
