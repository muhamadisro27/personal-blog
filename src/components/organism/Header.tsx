import { SidebarTrigger } from "@/components/ui/sidebar"
import Box from "@/components/atoms/Box/Box"

const Header = () => {
  return (
    <Box className="flex flex-row w-full justify-between px-2 py-1">
      <SidebarTrigger />
    </Box>
  )
}

export default Header
