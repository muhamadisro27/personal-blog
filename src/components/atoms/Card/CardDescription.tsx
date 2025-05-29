import { ComponentProps } from "react"
import { CardDescription as CardDescriptionShadCN } from "@/components/ui/card"

type Props = {} & ComponentProps<typeof CardDescriptionShadCN>

const CardDescription = ({ children, ...props }: Props) => {
  return <CardDescriptionShadCN {...props}>{children}</CardDescriptionShadCN>
}

export default CardDescription
