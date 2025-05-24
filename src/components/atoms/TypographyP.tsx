import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function TypographyP({ children, className, ...props }: Props) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  )
}
