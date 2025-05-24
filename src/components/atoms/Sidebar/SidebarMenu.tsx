import React, { ComponentProps } from "react"
import { SidebarMenu as SidebarMenuShadCN } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const SidebarMenu = ({
  children,
  className,
  ...props
}: ComponentProps<typeof SidebarMenuShadCN>) => {
  return (
    <SidebarMenuShadCN className={cn("p-1", className)} {...props}>
      {children}
    </SidebarMenuShadCN>
  )
}

export default SidebarMenu
