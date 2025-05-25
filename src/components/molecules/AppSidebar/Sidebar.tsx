import SidebarDropdown from "@/components/organism/SidebarDropdown"
import SidebarHome from "@/components/organism/SidebarHome"
import SidebarProfile from "@/components/organism/SidebarProfile"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import ToggleSwitchTheme from "../ToggleSwitchTheme"

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* Profiles */}
        <SidebarDropdown />
      </SidebarHeader>

      <SidebarContent>
        {/* Home */}
        <SidebarHome />

        {/* Profile */}
        <SidebarProfile />
      </SidebarContent>

      <SidebarFooter className="items-end">
        <ToggleSwitchTheme />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
