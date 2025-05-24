import { ComponentProps, ReactNode } from "react"
import { CardDescription as CardDescriptionShadCN } from "@/components/ui/card"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardDescriptionShadCN>

const CardDescription = ({ children, ...props }: Props) => {
  return <CardDescriptionShadCN {...props}>{children}</CardDescriptionShadCN>
}

export default CardDescription
