import { DropdownMenuItem as DropdownMenuItemShadCN } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

const DropdownMenuItem = ({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenuItemShadCN>) => {
  return (
    <DropdownMenuItemShadCN
      className={cn(`cursor-pointer backdrop-blur-lg`, className)}
      {...props}
    >
      {children}
    </DropdownMenuItemShadCN>
  )
}

export default DropdownMenuItem
