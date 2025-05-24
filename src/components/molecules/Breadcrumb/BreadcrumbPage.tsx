import {
  BreadcrumbItem,
  BreadcrumbPage as BreadcrumbPageShadCn,
} from "@/components/ui/breadcrumb"

interface Props {
  title: string
}

const BreadcrumbPage = ({ title }: Props) => {
  return (
    <BreadcrumbItem>
      <BreadcrumbPageShadCn>{title}</BreadcrumbPageShadCn>
    </BreadcrumbItem>
  )
}

export default BreadcrumbPage
