import { TAppMode } from "@/types"
import { IRuntimeConfig } from "@/types/config"
import { parseBoolean } from "@/utils"
import { APP_MODE } from "@/utils/constant"

export const runtimeConfig = (): IRuntimeConfig => {
  return {
    appMode:
      (process.env.NEXT_PUBLIC_APP_MODE as TAppMode) ?? APP_MODE.production,
    pages: {
      home: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_HOMEPAGE),
      about: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_ABOUT),
      contact: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_CONTACT),
      run: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_RUN),
      books: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_BOOKS),
      reksadana: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_REKSADANA),
      gold: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_GOLD),
    },
    apiKey: {
      news: process.env.SECRET_NEWS_API_KEY!,
    },
    baseURL: {
      news: process.env.NUXT_PUBLIC_NEWS_BASE_URL!,
    },
  }
}
