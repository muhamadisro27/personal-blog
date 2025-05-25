import { Typography } from "@/components/atoms/Typography"
import { Code } from "lucide-react"

const MaintenancePage = () => {
  return (
    <div className="flex flex-col h-[calc(100svh-80px)] justify-center items-center gap-y-4">
      <Typography as="h2" className="text-2xl">
        This page is still under development.
      </Typography>
      <Code className="w-20 h-20" />
    </div>
  )
}

export default MaintenancePage
