import SidebarDropdown from "@/components/organism/SidebarDropdown"
import SidebarHome from "@/components/organism/SidebarHome"
import SidebarProfile from "@/components/organism/SidebarProfile"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"

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
    </Sidebar>
  )
}

export default AppSidebar
