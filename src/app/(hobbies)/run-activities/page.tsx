import Run from "@/components/pages/hobbies/Run"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/flags"

const Page = () => (isFeatureEnabled("run") ? <Run /> : <MaintenancePage />)

export default Page
