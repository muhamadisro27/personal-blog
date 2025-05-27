import { TAppMode } from "@/types"
import { IRuntimeConfig } from "@/types/config"
import { parseBoolean } from "@/utils"
import { APP_MODE } from "@/utils/constant"

export const runtimeConfig = (): IRuntimeConfig => {
  return {
    appMode:
      (process.env.NEXT_PUBLIC_APP_MODE as TAppMode) ?? APP_MODE.production,
    pages: {
      home: parseBoolean(process.env.NEXT_PUBLIC_PAGE_HOMEPAGE),
      about: parseBoolean(process.env.NEXT_PUBLIC_PAGE_ABOUT),
      contact: parseBoolean(process.env.NEXT_PUBLIC_PAGE_CONTACT),
      run: parseBoolean(process.env.NEXT_PUBLIC_PAGE_RUN),
      books: parseBoolean(process.env.NEXT_PUBLIC_PAGE_BOOKS),
      reksadana: parseBoolean(process.env.NEXT_PUBLIC_PAGE_REKSADANA),
      gold: parseBoolean(process.env.NEXT_PUBLIC_PAGE_GOLD),
    },
    apiKey: {
      article: process.env.SECRET_ARTICLE_API_KEY!,
    },
    baseURL: {
      article: process.env.NEXT_PUBLIC_ARTICLE_BASE_URL!,
    },
  }
}
