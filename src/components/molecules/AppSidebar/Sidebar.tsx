"use client"
import Box from "@/components/atoms/Box/Box"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/Dropdown"
import { Typography } from "@/components/atoms/Typography"
import SidebarProfile from "@/components/organism/SidebarProfile"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { TProfile } from "@/types"
import { setClassActive, setDefaultValue } from "@/utils"
import { PROFILES, SIDEBAR_MENUS } from "@/utils/constant"
import { ChevronsUpDown, Home } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createElement } from "react"

const AppSidebar = () => {
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
    <Sidebar>
      <SidebarHeader>
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
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={"/" === currentURL}>
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

        {/* List Profile */}
        <SidebarProfile />
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
