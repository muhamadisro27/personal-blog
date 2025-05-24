import { ComponentProps, ReactNode } from "react"
import { Button as ShadCNBtn } from "@/components/ui/button"

type Props = {
  children: ReactNode
} & ComponentProps<typeof ShadCNBtn>

const Button = ({ children, ...props }: Props) => {
  return <ShadCNBtn {...props}>{children}</ShadCNBtn>
}

export default Button
