import {
  Sidebar as SidebarShadCN,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import SidebarPersonal from "@/components/organism/SidebarPersonal"

const Sidebar = () => {
  return (
    <SidebarShadCN>
      <SidebarHeader />
      <SidebarContent>
        <SidebarPersonal />
        {/* <SidebarRun /> */}
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </SidebarShadCN>
  )
}

export default Sidebar
