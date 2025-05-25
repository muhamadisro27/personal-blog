import AboutPage from "@/components/pages/personal/AboutPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/feature-flags"

const Page = () =>
  isFeatureEnabled("about") ? <AboutPage /> : <MaintenancePage />

export default Page
