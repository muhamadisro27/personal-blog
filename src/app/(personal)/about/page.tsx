import AboutPage from "@/components/pages/personal/AboutPage"
import MaintenancePage from "@/components/pages/MaintenancePage"
import { isPageEnabled } from "@/lib/flags"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Page | @muhamadisro.dev",
  description: "Get to know more about me",
}

const Page = () => {
  return isPageEnabled("about") ? <AboutPage /> : <MaintenancePage />
}

export default Page
