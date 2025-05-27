import { TPageFlagMap, TPageKey } from "@/types"
import { APP_MODE } from "@/utils/constant"
import { runtimeConfig } from "./config"

const { appMode, pages } = runtimeConfig()

export const FEATURE_FLAGS: TPageFlagMap = pages
export const isFeatureEnabled = (key: TPageKey): boolean =>
  Boolean(FEATURE_FLAGS[key]) || appMode === APP_MODE.development
