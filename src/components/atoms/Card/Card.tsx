import { ComponentProps, ReactNode } from "react"
import { Card as CardShadCN } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardShadCN>

const Card = ({ children, className, ...props }: Props) => {
  return (
    <CardShadCN
      className={cn("border-2 border-[#404040] bg-card/35 backdrop-blur-lg transition-all", className)}
      {...props}
    >
      {children}
    </CardShadCN>
  )
}

export default Card
