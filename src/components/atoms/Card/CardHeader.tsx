import { ComponentProps, ReactNode } from "react"
import { CardHeader as CardHeaderShadCN } from "@/components/ui/card"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardHeaderShadCN>

const CardHeader = ({ children, ...props }: Props) => {
  return <CardHeaderShadCN {...props}>{children}</CardHeaderShadCN>
}

export default CardHeader
