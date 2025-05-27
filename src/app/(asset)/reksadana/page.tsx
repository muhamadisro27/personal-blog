import ReksadanaPage from "@/components/pages/asset/ReksadanaPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/flags"

const Page = () =>
  isFeatureEnabled("reksadana") ? <ReksadanaPage /> : <MaintenancePage />

export default Page
