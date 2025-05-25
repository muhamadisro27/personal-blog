import { ComponentProps, ReactNode } from "react"
import { Card as CardShadCN } from "@/components/ui/card"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardShadCN>

const Card = ({ children, ...props }: Props) => {
  return (
    <CardShadCN
      className="border-[#404040] bg-card/40 backdrop-blur-lg"
      {...props}
    >
      {children}
    </CardShadCN>
  )
}

export default Card
