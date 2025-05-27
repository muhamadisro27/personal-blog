import MaintenancePage from "@/components/pages/MaintenancePage"
import Homepage from "@/components/pages/personal/Homepage"
import { isFeatureEnabled } from "@/lib/flags"
import { INewsResponseApi } from "@/types/api"
import { INewsData } from "@/types/api/news"

async function getNewsData(): Promise<INewsData[]> {
  try {
    const { runtimeConfig } = await import("@/lib/config")
    const { baseURL, apiKey } = runtimeConfig()

    const response = await fetch(
      `${baseURL.news}/top-headlines/sources?category=technology`,
      {
        headers: {
          "X-Api-Key": apiKey.news,
        },
        next: {
          revalidate: 86400,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = (await response.json()) as INewsResponseApi

    return data.sources ? data.sources.slice(0, 6) : []
  } catch (error) {
    console.error('error', error)
    return []
  }
}

const Page = async () => {
  const news = await getNewsData()

  return isFeatureEnabled("home") ? (
    <Homepage news={news} />
  ) : (
    <MaintenancePage />
  )
}

export default Page
