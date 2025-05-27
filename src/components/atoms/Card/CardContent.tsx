import { ComponentProps, ReactNode } from "react"
import { CardContent as CardContentShadCN } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
} & ComponentProps<typeof CardContentShadCN>

const CardContent = ({ children, className, ...props }: Props) => {
  return (
    <CardContentShadCN
      className={cn("flex flex-col space-y-1.5 p-4", className)}
      {...props}
    >
      {children}
    </CardContentShadCN>
  )
}

export default CardContent
