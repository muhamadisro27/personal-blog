import AboutPage from "@/components/pages/personal/AboutPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/flags"

const Page = () => {
  return isFeatureEnabled("about") ? <AboutPage /> : <MaintenancePage />
}

export default Page
