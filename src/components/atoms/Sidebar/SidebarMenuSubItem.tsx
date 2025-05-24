import { SidebarMenuSubItem as SidebarMenuSubItemShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarMenuSubItem = ({
  children,
  ...props
}: ComponentProps<typeof SidebarMenuSubItemShadCN>) => {
  return (
    <SidebarMenuSubItemShadCN {...props}>{children}</SidebarMenuSubItemShadCN>
  )
}

export default SidebarMenuSubItem
