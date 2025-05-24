"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/Dropdown"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/atoms/Sidebar"
import { Typography } from "@/components/atoms/Typography"
import SidebarAsset from "@/components/organism/SidebarAsset"
import SidebarHobbies from "@/components/organism/SidebarHobbies"
import SidebarPersonal from "@/components/organism/SidebarPersonal"
import { cn } from "@/lib/utils"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { TProfile, TSidebarMap } from "@/types"
import { setClassActive, setDefaultValue } from "@/utils"
import { PROFILES } from "@/utils/constant"
import { ChevronsUpDown } from "lucide-react"
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
    router.push("/")
  }

  const SIDEBAR_COMPONENT_MAP: TSidebarMap = {
    personal: <SidebarPersonal />,
    hobbies: <SidebarHobbies />,
    asset: <SidebarAsset />,
  } as const

  const renderSidebarContent = () => SIDEBAR_COMPONENT_MAP[selectedProfile]

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-6" icon={ChevronsUpDown}>
                  {createElement(PROFILES[selectedProfile].icon)}
                  {setDefaultValue(
                    PROFILES[selectedProfile].title,
                    "Select Personal"
                  )}
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
      <SidebarContent>{renderSidebarContent()}</SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
