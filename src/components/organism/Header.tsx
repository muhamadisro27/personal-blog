import React from "react"
import { SidebarTrigger } from "../ui/sidebar"
import ToggleSwitchTheme from "../molecules/ToggleSwitchTheme"

const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between px-2 py-1">
      <SidebarTrigger />
      <ToggleSwitchTheme />
    </div>
  )
}

export default Header
