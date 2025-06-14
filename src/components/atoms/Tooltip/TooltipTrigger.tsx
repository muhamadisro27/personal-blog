import { ComponentProps } from "react"
import { TooltipTrigger as TooltipTriggerShadCN } from "@/components/ui/tooltip"

type Props = {} & ComponentProps<typeof TooltipTriggerShadCN>

const TooltipTrigger = ({ children, ...props }: Props) => {
  return <TooltipTriggerShadCN {...props}>{children}</TooltipTriggerShadCN>
}

export default TooltipTrigger
