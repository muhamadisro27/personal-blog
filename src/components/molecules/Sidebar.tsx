import React from "react"
import {
  Sidebar as SidebarShadCN,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import SidebarMenus from "@/components/organism/SidebarMenus"

const Sidebar = () => {
  return (
    <SidebarShadCN>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenus />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </SidebarShadCN>
  )
}

export default Sidebar
