import React, { ComponentProps, ReactNode } from "react"
import { Label as LabelShadCN } from "@/components/ui/label"

type Props = {
  children: ReactNode
} & ComponentProps<typeof LabelShadCN>

const Label = ({ children, htmlFor, ...props }: Props) => {
  return (
    <LabelShadCN htmlFor={htmlFor} {...props}>
      {children}
    </LabelShadCN>
  )
}

export default Label
