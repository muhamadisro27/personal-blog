import { TProfileMap } from "@/types"
import { DollarSign, Footprints, SquareUserRound } from "lucide-react"

export const prefix = "Hi, I'm " as const
export const suffixes = ["Muhamad Isro Sabanur", "Frontend Engineer"] as const
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
