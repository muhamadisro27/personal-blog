import { ComponentProps, ReactNode } from "react"
import { CardFooter as CardFooterShadCN } from "@/components/ui/card"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardFooterShadCN>

const CardFooter = ({ children, ...props }: Props) => {
  return <CardFooterShadCN {...props}>{children}</CardFooterShadCN>
}

export default CardFooter
