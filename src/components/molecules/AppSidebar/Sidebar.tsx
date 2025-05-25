"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/Dropdown"
import { Typography } from "@/components/atoms/Typography"
import SidebarAsset from "@/components/organism/SidebarAsset"
import SidebarHobbies from "@/components/organism/SidebarHobbies"
import SidebarPersonal from "@/components/organism/SidebarPersonal"
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
import { cn } from "@/lib/utils"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { TProfile, TSidebarMap } from "@/types"
import { setClassActive, setDefaultValue } from "@/utils"
import { PROFILES, SIDEBAR_MENUS } from "@/utils/constant"
import { Home } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createElement } from "react"

const AppSidebar = () => {
  const selectedProfile = useSidebarStore(
    (state) => state.selectedProfile ?? "personal"
  )
  const router = useRouter()
  const { setSelectedProfile } = useSidebarStore()

  const handleSelectProfile = (profile: TProfile) => {
    if (profile === selectedProfile) return

    setSelectedProfile(profile)
    router.push(SIDEBAR_MENUS[profile][0].url)
  }

  const SIDEBAR_COMPONENT_MAP: TSidebarMap = {
    personal: <SidebarPersonal />,
    hobbies: <SidebarHobbies />,
    asset: <SidebarAsset />,
  } as const

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-6">
                  {createElement(PROFILES[selectedProfile].icon)}
                  {setDefaultValue(
                    PROFILES[selectedProfile].title,
                    "Select Personal"
                  )}
                  <Home className="ml-auto" />
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/"} className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarProfile sidebar={SIDEBAR_COMPONENT_MAP[selectedProfile]} />
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
