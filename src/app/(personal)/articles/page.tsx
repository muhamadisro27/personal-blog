import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () => {
  return isPageEnabled("article") ? (
    <>Article</>
  ) : (
    <MaintenancePage />
  )
}

export default Page
