import { DropdownMenuContent as DropdownMenuContentShadCN } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

const DropdownMenuContent = ({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenuContentShadCN>) => {
  return (
    <DropdownMenuContentShadCN
      className={cn("w-[--radix-popper-anchor-width]", className)}
      {...props}
    >
      {children}
    </DropdownMenuContentShadCN>
  )
}

export default DropdownMenuContent
