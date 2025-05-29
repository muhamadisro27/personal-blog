import { BreadcrumbItem as BreadcrumbItemShadCN } from "@/components/ui/breadcrumb"
import { ComponentProps } from "react"

type Props = {} & ComponentProps<typeof BreadcrumbItemShadCN>

const BreadcrumbItem = ({ children, ...props }: Props) => {
  return <BreadcrumbItemShadCN {...props}>{children}</BreadcrumbItemShadCN>
}

export default BreadcrumbItem
