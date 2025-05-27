import { TPageFlagMap, TPageKey } from "@/types"
import { APP_MODE } from "@/utils/constant"
import { useRuntimeConfig } from "./config"

const { appMode, pages } = useRuntimeConfig()

export const FEATURE_FLAGS: TPageFlagMap = pages
export const isFeatureEnabled = (key: TPageKey): boolean =>
  Boolean(FEATURE_FLAGS[key]) || appMode === APP_MODE.development
