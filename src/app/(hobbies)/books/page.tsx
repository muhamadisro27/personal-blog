import BooksPage from "@/components/pages/hobbies/BooksPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isFeatureEnabled } from "@/lib/feature-flags"

const Page = () =>
  isFeatureEnabled("books") ? <BooksPage /> : <MaintenancePage />

export default Page
