import { SidebarGroupContent as SidebarGroupContentShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarGroupContent = ({
  children,
  ...props
}: ComponentProps<typeof SidebarGroupContentShadCN>) => {
  return (
    <SidebarGroupContentShadCN {...props}>{children}</SidebarGroupContentShadCN>
  )
}

export default SidebarGroupContent
