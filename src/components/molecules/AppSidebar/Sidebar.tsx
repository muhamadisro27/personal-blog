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
import SidebarPersonal from "@/components/organism/SidebarPersonal"
import { cn } from "@/lib/utils"
import { TProfile, TProfileMap } from "@/types"
import { setClassActive, setDefaultValue } from "@/utils"
import {
  ChevronsUpDown,
  DollarSign,
  Footprints,
  SquareUserRound,
} from "lucide-react"
import { createElement, useState } from "react"

const AppSidebar = () => {
  const [selectedProfile, setSelectedProfile] = useState<TProfile>("personal")
  const [profiles, setProfiles] = useState<TProfileMap>({
    personal: {
      title: "Personal",
      value: "personal",
      icon: SquareUserRound,
    },
    hobbies: {
      title: "Hobbies",
      value: "hobbies",
      icon: Footprints,
    },
    asset: {
      title: "Asset",
      value: "asset",
      icon: DollarSign,
    },
  })

  const handleSelectProfile = (profile: TProfile) => {
    setSelectedProfile(profile)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-6" icon={ChevronsUpDown}>
                  {createElement(profiles[selectedProfile].icon)}
                  {setDefaultValue(
                    profiles[selectedProfile].title,
                    "Select Personal"
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.values(profiles).map((profile) => {
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
                      <span>{profile.title}</span>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarPersonal />
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
