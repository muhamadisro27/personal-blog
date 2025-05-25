import { cn } from "@/lib/utils"
import React, { ComponentPropsWithoutRef } from "react"

type Props = ComponentPropsWithoutRef<"hr">

const Divider = ({ className, ...props }: Props) => {
  return (
    <hr
      className={cn("mt-[1rem] h-[1px] block border border-t-[#404040] mx-auto", className)}
      {...props}
    />
  )
}

export default Divider
