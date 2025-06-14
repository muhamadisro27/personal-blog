import MaintenancePage from "@/components/pages/MaintenancePage"
import ArticlePage from "@/components/pages/personal/ArticlePage"
import { isPageEnabled } from "@/lib/flags"
import { IArticleData } from "@/types/api/article"

async function getArticleData(): Promise<IArticleData[]> {
  try {
    const { runtimeConfig } = await import("@/lib/config")
    const { baseURL, apiKey } = runtimeConfig()

    const response = await fetch(`${baseURL.article}/articles/me/published`, {
      headers: {
        "api-key": apiKey.article,
      },
      next: {
        revalidate: 86400,
      },
    })

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      return []
    }

    const data = (await response.json()) as IArticleData[]

    return data ? data.slice(0, 6) : []
  } catch (error) {
    console.error("error", error)
    return []
  }
}

const Page = async () => {
  const articles = await getArticleData()

  return isPageEnabled("article") ? <ArticlePage articles={articles} /> : <MaintenancePage />
}

export default Page
