import AboutPage from "@/components/pages/personal/AboutPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () => {
  return isPageEnabled("about") ? <AboutPage /> : <MaintenancePage />
}

export default Page
