import {
  BreadcrumbList,
  Breadcrumb as BreadcrumbShadCN,
} from "@/components/ui/breadcrumb"
import { IBreadcrumbLink } from "@/types"
import BreadcrumbLink from "./BreadcrumbLink"
import BreadcrumbPage from "./BreadcrumbPage"

interface Props {
  breadcrumbLinks: IBreadcrumbLink[]
}

const Breadcrumb = ({ breadcrumbLinks }: Props) => {
  return (
    <BreadcrumbShadCN>
      <BreadcrumbList>
        {breadcrumbLinks.map((breadCrumb, index) => (
          <>
            {index === breadcrumbLinks.length - 1 ? (
              <BreadcrumbPage title={breadCrumb.title} />
            ) : (
              <BreadcrumbLink
                title={breadCrumb.title}
                key={index}
                link={breadCrumb.url}
              />
            )}
          </>
        ))}
      </BreadcrumbList>
    </BreadcrumbShadCN>
  )
}

export default Breadcrumb
