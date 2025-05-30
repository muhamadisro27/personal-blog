import React, { ComponentProps, ReactNode } from "react"

type Props = {
  children?: ReactNode
} & ComponentProps<"div">

const Box = ({ children, ...props }: Props) => {
  return <div {...props}>{children}</div>
}

export default Box
