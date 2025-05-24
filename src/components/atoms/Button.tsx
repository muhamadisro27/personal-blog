import { ComponentProps, ReactNode } from "react"
import { Button as ShadCNBtn } from "@/components/ui/button"

interface Props extends ComponentProps<typeof ShadCNBtn> {
  children: ReactNode
}

const Button = ({ children, ...props }: Props) => {
  return <ShadCNBtn {...props}>{children}</ShadCNBtn>
}

export default Button
