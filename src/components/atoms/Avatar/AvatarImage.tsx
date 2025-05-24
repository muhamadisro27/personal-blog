import React, { ComponentProps } from "react"
import { AvatarImage as AvatarImageShadCN } from "@/components/ui/avatar"

const AvatarImage = ({
  ...props
}: ComponentProps<typeof AvatarImageShadCN>) => {
  return <AvatarImageShadCN {...props} />
}

export default AvatarImage
