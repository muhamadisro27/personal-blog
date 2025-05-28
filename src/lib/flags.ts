import { TPageFlagMap, TPageKey } from "@/types"
import { APP_MODE } from "@/utils/constant"
import { runtimeConfig } from "./config"

const { appMode, pages } = runtimeConfig()

export const PAGE_FLAGS: TPageFlagMap = pages
export const isPageEnabled = (key: TPageKey): boolean =>
  Boolean(PAGE_FLAGS[key]) || appMode === APP_MODE.development
