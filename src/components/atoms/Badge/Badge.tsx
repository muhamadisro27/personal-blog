import { Badge as BadgeShadCN, badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"

type Props = VariantProps<typeof badgeVariants> &
  ComponentProps<typeof BadgeShadCN>

const Badge = ({
  children,
  variant = "outline",
  className,
  ...props
}: Props) => {
  return (
    <BadgeShadCN
      variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </BadgeShadCN>
  )
}

export default Badge
