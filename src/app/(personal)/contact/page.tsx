import ContactPage from "@/components/pages/personal/ContactPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () =>
  isPageEnabled("contact") ? <ContactPage /> : <MaintenancePage />

export default Page
