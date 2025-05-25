import { TAppModeMap, TProfileMap } from "@/types"
import { DollarSign, Footprints, SquareUserRound } from "lucide-react"

export const prefix = "Hi, I'm " as const
export const suffixes = ["Muhamad Isro Sabanur", "Frontend Engineer"]
export const PROFILES: TProfileMap = {
  personal: {
    title: "Personal",
    value: "personal",
    icon: SquareUserRound,
  },
  hobbies: {
    title: "Hobbies",
    value: "hobbies",
    icon: Footprints,
  },
  asset: {
    title: "Asset",
    value: "asset",
    icon: DollarSign,
  },
} as const

export const APP_MODE: TAppModeMap = {
  development: "development",
  production: "production",
}

export const CURRENT_APP_MODE =
  process.env.NEXT_PUBLIC_APP_MODE ?? APP_MODE.production
