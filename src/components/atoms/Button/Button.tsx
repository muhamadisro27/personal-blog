import { ComponentProps } from "react"
import { Button as ShadCNBtn } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Button = ({
  children,
  className,
  ...props
}: ComponentProps<typeof ShadCNBtn>) => {
  return (
    <ShadCNBtn
      {...props}
      className={cn(
        "max-w-max backdrop-blur-lg bg-card/10 border border-[#404040]",
        className
      )}
    >
      {children}
    </ShadCNBtn>
  )
}

export default Button
