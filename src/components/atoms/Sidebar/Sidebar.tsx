import { Sidebar as SidebarShadCN } from "@/components/ui/sidebar"
import { ComponentProps } from "react"

const Sidebar = ({
  children,
  ...props
}: ComponentProps<typeof SidebarShadCN>) => {
  return <SidebarShadCN {...props}>{children}</SidebarShadCN>
}

export default Sidebar
