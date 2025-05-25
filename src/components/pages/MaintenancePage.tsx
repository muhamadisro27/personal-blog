import { Typography } from "@/components/atoms/Typography"
import { Code } from "lucide-react"
import ContainerPage from "../molecules/ContainerPage"

const MaintenancePage = () => {
  return (
    <ContainerPage>
      <Typography as="h2" className="text-2xl text-center">
        This page is still under development.
      </Typography>
      <Code className="w-20 h-20" />
    </ContainerPage>
  )
}

export default MaintenancePage
