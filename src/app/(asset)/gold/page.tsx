import GoldPage from "@/components/pages/asset/GoldPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/flags"

const Page = () =>
  isFeatureEnabled("gold") ? <GoldPage /> : <MaintenancePage />

export default Page
