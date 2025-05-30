import DetailArticlePage from "@/components/pages/article/DetailArticlePage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"

const Page = () => {
  return isPageEnabled("detail-article") ? (
    <>
      <DetailArticlePage />
    </>
  ) : (
    <MaintenancePage />
  )
}

export default Page
