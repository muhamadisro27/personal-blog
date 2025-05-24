import React, { ComponentPropsWithoutRef, ReactNode } from "react"

type Props = {
  children?: ReactNode
} & ComponentPropsWithoutRef<"div">

const Box = ({ children, ...props }: Props) => {
  return <div {...props}>{children}</div>
}

export default Box
