import { SidebarGroupLabel as SidebarGroupLabelShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const SidebarGroupLabel = ({
  children,
  ...props
}: ComponentProps<typeof SidebarGroupLabelShadCN>) => {
  return (
    <SidebarGroupLabelShadCN {...props}>{children}</SidebarGroupLabelShadCN>
  )
}

export default SidebarGroupLabel
