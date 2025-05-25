import { TFeatureFlagMap, TFeatureKey } from "@/types"
import { parseBoolean } from "@/utils"
import { APP_MODE, CURRENT_APP_MODE } from "@/utils/constant"

export const FEATURE_FLAGS: TFeatureFlagMap = {
  home: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_HOMEPAGE),
  about: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_ABOUT),
  contact: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_CONTACT),
  run: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_RUN),
  books: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_BOOKS),
  reksadana: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_REKSADANA),
  gold: parseBoolean(process.env.NEXT_PUBLIC_FEATURE_GOLD), // ganti env key sesuai fitur
}

export const isFeatureEnabled = (key: TFeatureKey): boolean =>
  Boolean(FEATURE_FLAGS[key]) || CURRENT_APP_MODE === APP_MODE.development
