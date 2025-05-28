import BooksPage from "@/components/pages/hobbies/BooksPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () =>
  isPageEnabled("books") ? <BooksPage /> : <MaintenancePage />

export default Page
