import { ComponentProps } from "react"
import { Button as ShadCNBtn } from "@/components/ui/button"

const Button = ({ children, ...props }: ComponentProps<typeof ShadCNBtn>) => {
  return <ShadCNBtn {...props}>{children}</ShadCNBtn>
}

export default Button
