import SidebarDropdown from "@/components/organism/SidebarDropdown"
import SidebarHome from "@/components/organism/SidebarHome"
import SidebarProfile from "@/components/organism/SidebarProfile"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"

const AppSidebar = () => {
  return (
    <Sidebar variant="inset" collapsible="icon" className="border-[#404040] bg-sidebar/20 backdrop-blur-lg">
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

      {/* <SidebarFooter className="items-end">
        <ToggleSwitchTheme />
      </SidebarFooter> */}
    </Sidebar>
  )
}

export default AppSidebar
