import React, { ReactNode } from "react"
import { TProfile } from "./profile"

export interface IBreadcrumbLink {
  title: string
  url: string
}

export type TSidebarMap = {
  [K in TProfile]: ReactNode
}
