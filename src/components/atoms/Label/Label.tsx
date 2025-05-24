import React, { ComponentProps } from "react"
import { Label as LabelShadCN } from "@/components/ui/label"

const Label = ({
  children,
  htmlFor,
  ...props
}: ComponentProps<typeof LabelShadCN>) => {
  return (
    <LabelShadCN htmlFor={htmlFor} {...props}>
      {children}
    </LabelShadCN>
  )
}

export default Label
