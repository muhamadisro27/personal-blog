import { TooltipContent as TooltipContentShadCN } from "@/components/ui/tooltip"
import { ComponentProps } from "react"

type Props = {} & ComponentProps<typeof TooltipContentShadCN>

const TooltipContent = ({ children, ...props }: Props) => {
  return <TooltipContentShadCN {...props}>{children}</TooltipContentShadCN>
}

export default TooltipContent
