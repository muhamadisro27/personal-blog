import { ComponentProps, ReactNode } from "react"
import { CardTitle as CardTitleShadCN } from "@/components/ui/card"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardTitleShadCN>

const CardTitle = ({ children, ...props }: Props) => {
  return <CardTitleShadCN {...props}>{children}</CardTitleShadCN>
}

export default CardTitle
