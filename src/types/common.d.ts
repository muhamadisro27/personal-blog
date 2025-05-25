import { ReactNode } from "react"
import { TProfile } from "./profile"
import { LucideIcon } from "lucide-react"

export interface IBreadcrumbLink {
  title: string
  url: string
}

export type TSidebarMap = {
  [K in TProfile]: ReactNode
}

export type TBooleanString = "false" | "true" | string | undefined

export type TAppMode = "development" | "production"

export type TAppModeMap = {
  [K in TAppMode]: string
}

interface TSidebarMenu {
  label: string
  url: string
  icon: LucideIcon
}

export type TSidebarMenuMap = {
  [K in TProfile]: TSidebarMenu[]
}
