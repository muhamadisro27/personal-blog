import {
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink as BreadcrumbLinksShadCN,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import Link from "next/link"
import React from "react"

interface Props {
  title: string
  link: string
}

const BreadcrumbLink = ({ title, link }: Props) => {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLinksShadCN asChild>
          <Link href={link}>{title}</Link>
        </BreadcrumbLinksShadCN>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
    </>
  )
}

export default BreadcrumbLink
