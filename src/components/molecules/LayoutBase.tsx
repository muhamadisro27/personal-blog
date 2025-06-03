import React, { ReactNode } from "react"
import { Box } from "@/components/atoms/Box"

type Props = {
  children: ReactNode
}

const LayoutBase = ({ children }: Props) => {
  return (
    <Box className="flex flex-col mt-4 items-center">
      <Box className="max-w-[854px]">{children}</Box>
    </Box>
  )
}

export default LayoutBase
