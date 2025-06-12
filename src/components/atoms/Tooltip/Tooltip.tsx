import { Tooltip as TooltipShadCN } from "@/components/ui/tooltip"
import { ComponentProps } from "react"

type Props = {} & ComponentProps<typeof TooltipShadCN>

const Tooltip = ({ children, ...props }: Props) => {
  return <TooltipShadCN {...props}>{children}</TooltipShadCN>
}

export default Tooltip
