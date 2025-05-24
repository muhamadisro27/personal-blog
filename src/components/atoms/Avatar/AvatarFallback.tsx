import React, { ComponentProps, ReactNode } from "react"
import { AvatarFallback as AvatarFallbackShadCN } from "@/components/ui/avatar"

type Props = {
  children: ReactNode
} & ComponentProps<typeof AvatarFallbackShadCN>

const AvatarFallback = ({ children, ...props }: Props) => {
  return <AvatarFallbackShadCN {...props}>{children}</AvatarFallbackShadCN>
}

export default AvatarFallback
