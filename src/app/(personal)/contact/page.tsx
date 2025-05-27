import ContactPage from "@/components/pages/personal/ContactPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/flags"

const Page = () =>
  isFeatureEnabled("contact") ? <ContactPage /> : <MaintenancePage />

export default Page
