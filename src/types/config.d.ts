import { TPageFlagMap } from "./flags"

export interface IRuntimeConfig {
  appMode: TAppMode
  pages: TPageFlagMap
  apiKey: {
    news: string
  }
  baseURL: {
    news: string
  }
}
