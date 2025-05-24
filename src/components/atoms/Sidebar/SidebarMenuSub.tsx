import { SidebarMenuSub as SidebarMenuSubShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarMenuSub = ({
  children,
  ...props
}: ComponentProps<typeof SidebarMenuSubShadCN>) => {
  return <SidebarMenuSubShadCN {...props}>{children}</SidebarMenuSubShadCN>
}

export default SidebarMenuSub
