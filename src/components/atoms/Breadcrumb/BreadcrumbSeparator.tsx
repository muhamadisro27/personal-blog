import React, { ComponentProps } from "react"
import { BreadcrumbSeparator as BreadcrumbSeparatorShadCN } from "@/components/ui/breadcrumb"

type Props = {} & ComponentProps<typeof BreadcrumbSeparatorShadCN>

const BreadcrumbSeparator = ({ children, ...props }: Props) => {
  return (
    <BreadcrumbSeparatorShadCN {...props}>{children}</BreadcrumbSeparatorShadCN>
  )
}

export default BreadcrumbSeparator
