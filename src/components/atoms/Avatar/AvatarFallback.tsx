import React, { ComponentProps } from "react"
import { AvatarFallback as AvatarFallbackShadCN } from "@/components/ui/avatar"

interface Props extends ComponentProps<typeof AvatarFallbackShadCN> {
  text: string
}

const AvatarFallback = ({ text, ...props }: Props) => {
  return <AvatarFallbackShadCN {...props}>{text}</AvatarFallbackShadCN>
}

export default AvatarFallback
