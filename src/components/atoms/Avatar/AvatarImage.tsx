import React, { ComponentProps } from "react"
import { AvatarImage as AvatarImageShadCN } from "@/components/ui/avatar"

interface Props extends ComponentProps<typeof AvatarImageShadCN> {
  src: string
}

const AvatarImage = ({ src, ...props }: Props) => {
  return <AvatarImageShadCN src={src} {...props} />
}

export default AvatarImage
