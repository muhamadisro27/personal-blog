import { ComponentProps } from "react"
import { SidebarHeader as SidebarHeaderShadCN } from "@/components/ui/sidebar"

const SidebarHeader = ({
  children,
  ...props
}: ComponentProps<typeof SidebarHeaderShadCN>) => {
  return <SidebarHeaderShadCN {...props}>{children}</SidebarHeaderShadCN>
}

export default SidebarHeader
