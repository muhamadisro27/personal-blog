import React, { ComponentProps } from "react"
import { AvatarImage as AvatarImageShadCN } from "@/components/ui/avatar"

type Props = {} & ComponentProps<typeof AvatarImageShadCN>

const AvatarImage = ({ src, ...props }: Props) => {
  return <AvatarImageShadCN src={src} {...props} />
}

export default AvatarImage
