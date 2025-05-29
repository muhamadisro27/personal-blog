import {
  BreadcrumbList,
  Breadcrumb as BreadcrumbShadCN,
} from "@/components/ui/breadcrumb"
import { IBreadcrumbLink } from "@/types"
import BreadcrumbLink from "./BreadcrumbLink"
import BreadcrumbPage from "./BreadcrumbPage"
import { Fragment } from "react"

interface Props {
  breadcrumbLinks: IBreadcrumbLink[]
}

const Breadcrumb = ({ breadcrumbLinks }: Props) => {
  return (
    <BreadcrumbShadCN>
      <BreadcrumbList>
        {breadcrumbLinks.map((breadCrumb, index) => (
          <Fragment key={index}>
            {index === breadcrumbLinks.length - 1 && breadCrumb.url === "" ? (
              <BreadcrumbPage title={breadCrumb.title} />
            ) : (
              <BreadcrumbLink  title={breadCrumb.title} link={breadCrumb.url} />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </BreadcrumbShadCN>
  )
}

export default Breadcrumb
