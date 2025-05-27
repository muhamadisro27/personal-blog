export interface IRuntimeConfig {
  appMode: TAppMode
  pages: {
    [K in TPageKey]: boolean
  }
  features: {}
  apiKey: {
    news: string
  }
  baseURL: {
    news: string
  }
}
