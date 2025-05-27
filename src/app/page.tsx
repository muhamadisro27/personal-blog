import MaintenancePage from "@/components/pages/MaintenancePage"
import Homepage from "@/components/pages/personal/Homepage"
import { isFeatureEnabled } from "@/lib/flags"

const Page = () => {
  return isFeatureEnabled("home") ? <Homepage /> : <MaintenancePage />
}

export default Page
