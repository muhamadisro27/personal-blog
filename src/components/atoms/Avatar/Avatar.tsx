import React, { ComponentProps, ReactNode } from "react"
import { Avatar as AvatarShadCN } from "@/components/ui/avatar"

interface Props extends ComponentProps<typeof AvatarShadCN> {
  children: ReactNode
}

const Avatar = ({ children, ...props }: Props) => {
  return <AvatarShadCN {...props}>{children}</AvatarShadCN>
}

export default Avatar
