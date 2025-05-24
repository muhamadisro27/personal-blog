import React, { ComponentProps } from "react"
import { Avatar as AvatarShadCN } from "@/components/ui/avatar"

const Avatar = ({
  children,
  ...props
}: ComponentProps<typeof AvatarShadCN>) => {
  return <AvatarShadCN {...props}>{children}</AvatarShadCN>
}

export default Avatar
