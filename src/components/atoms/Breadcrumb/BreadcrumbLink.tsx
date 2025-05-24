import {
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink as BreadcrumbLinksShadCN,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import React from "react"

interface Props {
  title: string
  link: string
}

const BreadcrumbLink = ({ title, link }: Props) => {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLinksShadCN href={link}>{title}</BreadcrumbLinksShadCN>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
    </>
  )
}

export default BreadcrumbLink
