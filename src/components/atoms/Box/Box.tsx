import React, { ComponentProps, ElementType, ReactNode } from "react"

type Props<T extends ElementType> = {
  children?: ReactNode
  as?: T
} & ComponentProps<"div">

const Box = <T extends ElementType = "div">({
  children,
  as,
  ...props
}: Props<T>) => {
  const Component = as || "div"

  return <Component {...props}>{children}</Component>
}

export default Box
