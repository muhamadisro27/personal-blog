import { SidebarGroup as SidebarGroupShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarGroup = ({
  children,
  ...props
}: ComponentProps<typeof SidebarGroupShadCN>) => {
  return <SidebarGroup {...props}>{children}</SidebarGroup>
}

export default SidebarGroup
