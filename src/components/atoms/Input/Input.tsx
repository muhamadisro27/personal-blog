import React, { ComponentProps } from "react"
import { Input as InputShadCN } from "@/components/ui/input"

const Input = ({ ...props }: ComponentProps<typeof InputShadCN>) => {
  return <InputShadCN {...props} />
}

export default Input
