import { BreadcrumbLink as BreadcrumbLinksShadCN } from "@/components/ui/breadcrumb"
import {
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb"
import { Slash } from "lucide-react"
import Link from "next/link"
import React, { ReactNode } from "react"

interface Props {
  title: string | ReactNode
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
