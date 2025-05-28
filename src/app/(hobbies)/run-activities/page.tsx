import Run from "@/components/pages/hobbies/Run"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () => (isPageEnabled("run") ? <Run /> : <MaintenancePage />)

export default Page
