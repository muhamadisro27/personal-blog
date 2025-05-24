import { SidebarFooter as SidebarFooterShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarFooter = ({
  children,
  ...props
}: ComponentProps<typeof SidebarFooterShadCN>) => {
  return <SidebarFooterShadCN {...props}>{children}</SidebarFooterShadCN>
}

export default SidebarFooter
