import { SidebarMenuButton as SidebarMenuButtonShadCN } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { ComponentProps, ReactNode } from "react"

type Props = {
  icon?: LucideIcon
} & ComponentProps<typeof SidebarMenuButtonShadCN>

const SidebarMenuButton = ({
  children,
  className,
  icon: Icon,
  ...props
}: Props) => {
  return (
    <SidebarMenuButtonShadCN
      className={cn("focus-visible:ring-0", className)}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-auto" />}
    </SidebarMenuButtonShadCN>
  )
}

export default SidebarMenuButton
