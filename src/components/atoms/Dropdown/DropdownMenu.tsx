import { DropdownMenu as DropdownMenuShadCN } from "@/components/ui/dropdown-menu"
import { ComponentProps } from "react"

const DropdownMenu = ({
  children,
  ...props
}: ComponentProps<typeof DropdownMenuShadCN>) => {
  return <DropdownMenuShadCN {...props}>{children}</DropdownMenuShadCN>
}

export default DropdownMenu
