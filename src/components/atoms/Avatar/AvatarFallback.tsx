import React, { ComponentProps } from "react"
import { AvatarFallback as AvatarFallbackShadCN } from "@/components/ui/avatar"

const AvatarFallback = ({
  children,
  ...props
}: ComponentProps<typeof AvatarFallbackShadCN>) => {
  return <AvatarFallbackShadCN {...props}>{children}</AvatarFallbackShadCN>
}

export default AvatarFallback
