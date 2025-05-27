import { TPageFlagMap } from "./flags"

export interface IRuntimeConfig {
  appMode: TAppMode
  pages: TPageFlagMap
  apiKey: {
    article: string
  }
  baseURL: {
    article: string
  }
}
