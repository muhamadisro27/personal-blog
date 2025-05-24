import { SidebarContent as SidebarContentShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarContent = ({
  children,
  ...props
}: ComponentProps<typeof SidebarContentShadCN>) => {
  return <SidebarContentShadCN {...props}>{children}</SidebarContentShadCN>
}

export default SidebarContent
