import ReksadanaPage from "@/components/pages/asset/ReksadanaPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () =>
  isPageEnabled("reksadana") ? <ReksadanaPage /> : <MaintenancePage />

export default Page
