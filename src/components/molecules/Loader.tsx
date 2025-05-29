import React, { ComponentProps } from "react"
import { Typography } from "@/components/atoms/Typography"
import { LoaderCircle, LucideIcon } from "lucide-react"
import { Box } from "@/components/atoms/Box"
import { cn } from "@/lib/utils"

type Props = {
  customText?: string
  isTextShow?: boolean
  textClassName?: HTMLSpanElement["className"]
  iconClassName?: ComponentProps<LucideIcon>["className"]
}

const Loader = ({
  customText = "Loading",
  isTextShow = true,
  textClassName,
  iconClassName,
}: Props) => {
  const combineTextClassName = cn(
    ``,
    textClassName,
    !isTextShow ? "hidden" : ""
  )

  return (
    <Box className="flex gap-x-2 items-center">
      <Typography as="span" className={combineTextClassName}>
        {customText}
      </Typography>
      <LoaderCircle className={cn("w-4 h-4 animate-spin", iconClassName)} />
    </Box>
  )
}

export default Loader
