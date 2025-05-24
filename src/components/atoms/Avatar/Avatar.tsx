import React, { ComponentProps, ReactNode } from "react"
import { Avatar as AvatarShadCN } from "@/components/ui/avatar"

type Props = {
  children: ReactNode
} & ComponentProps<typeof AvatarShadCN>

const Avatar = ({ children, ...props }: Props) => {
  return <AvatarShadCN {...props}>{children}</AvatarShadCN>
}

export default Avatar
