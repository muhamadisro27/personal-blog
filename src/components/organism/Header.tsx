import { SidebarTrigger } from "@/components/ui/sidebar"
import ToggleSwitchTheme from "../molecules/ToggleSwitchTheme"
import Box from "@/components/atoms/Box/Box"

const Header = () => {
  return (
    <Box className="flex flex-row w-full justify-between px-2 py-1">
      <SidebarTrigger />
      <ToggleSwitchTheme />
    </Box>
  )
}

export default Header
