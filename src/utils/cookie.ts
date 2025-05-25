import Cookies from "js-cookie"
import { TProfile } from "@/types"

const COOKIE_KEY = "selectedProfile"
const DEFAULT_PROFILE: TProfile = "personal"

export const getSelectedProfileFromCookie = (): TProfile => {
  const cookie = Cookies.get(COOKIE_KEY) as TProfile | undefined

  return cookie ?? DEFAULT_PROFILE
}

export const setSelectedProfileToCookie = (profile: TProfile) => {
  Cookies.set(COOKIE_KEY, profile, { expires: 1 })
}

export const getOrSetSelectedProfileCookie = (): TProfile => {
  const existing = Cookies.get("selectedProfile") as TProfile | undefined
  if (
    existing === "personal" ||
    existing === "hobbies" ||
    existing === "asset"
  ) {
    return existing
  }
  Cookies.set("selectedProfile", DEFAULT_PROFILE)
  return DEFAULT_PROFILE
}
