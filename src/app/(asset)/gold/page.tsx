import GoldPage from "@/components/pages/asset/GoldPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () =>
  isPageEnabled("gold") ? <GoldPage /> : <MaintenancePage />

export default Page
