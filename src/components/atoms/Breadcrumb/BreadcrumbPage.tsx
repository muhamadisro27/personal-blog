import { BreadcrumbPage as BreadcrumbPageShadCn } from "@/components/ui/breadcrumb"
import { BreadcrumbItem } from "@/components/atoms/Breadcrumb"
import { ComponentProps, ReactNode } from "react"

type Props = {
  title: string | ReactNode
} & ComponentProps<typeof BreadcrumbPageShadCn>

const BreadcrumbPage = ({ title }: Props) => {
  return (
    <BreadcrumbItem>
      <BreadcrumbPageShadCn className="line-clamp-1">
        {title}
      </BreadcrumbPageShadCn>
    </BreadcrumbItem>
  )
}

export default BreadcrumbPage
