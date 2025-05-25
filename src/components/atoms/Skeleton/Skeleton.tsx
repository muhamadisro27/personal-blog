"use client"
import React, { ComponentProps } from "react"
import { Skeleton as SkeletonShadCN } from "@/components/ui/skeleton"

const Skeleton = ({ ...props }: ComponentProps<typeof SkeletonShadCN>) => {
  return <SkeletonShadCN {...props} />
}

export default Skeleton
