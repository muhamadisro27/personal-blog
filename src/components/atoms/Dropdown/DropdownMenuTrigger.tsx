import { DropdownMenuTrigger as DropdownMenuTriggerShadCN } from "@/components/ui/dropdown-menu"
import { ComponentProps } from "react"

const DropdownMenuTrigger = ({
  children,
  ...props
}: ComponentProps<typeof DropdownMenuTriggerShadCN>) => {
  return (
    <DropdownMenuTriggerShadCN {...props}>{children}</DropdownMenuTriggerShadCN>
  )
}

export default DropdownMenuTrigger
