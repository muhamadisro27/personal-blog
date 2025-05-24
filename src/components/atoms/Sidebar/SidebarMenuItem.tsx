import { SidebarMenuItem as SidebarMenuItemShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarMenuItem = ({
  children,
  ...props
}: ComponentProps<typeof SidebarMenuItemShadCN>) => {
  return <SidebarMenuItemShadCN {...props}>{children}</SidebarMenuItemShadCN>
}

export default SidebarMenuItem
