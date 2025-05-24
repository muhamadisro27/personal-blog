import { ComponentProps, ReactNode } from "react"
import { Card as CardShadCN } from "@/components/ui/card"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardShadCN>

const Card = ({ children, ...props }: Props) => {
  return <CardShadCN {...props}>{children}</CardShadCN>
}

export default Card
