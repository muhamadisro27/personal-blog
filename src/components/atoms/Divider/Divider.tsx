import { cn } from "@/lib/utils"
import React, { ComponentPropsWithoutRef } from "react"

type Props = ComponentPropsWithoutRef<"hr">

const Divider = ({ className, ...props }: Props) => {
  return <hr className={cn("mt-5", className)} {...props} />
}

export default Divider
