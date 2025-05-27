import React, { ReactNode } from "react"
import { Box } from "@/components/atoms/Box"

const ContainerPage = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="flex flex-col h-[calc(100svh-80px)] justify-center  items-center gap-y-4">
      {children}
    </Box>
  )
}

export default ContainerPage
