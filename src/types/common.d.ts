import { ReactNode } from "react"
import { TProfile } from "./profile"

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
