import { TBooleanString, TProfile } from "@/types"
import { SIDEBAR_MENUS } from "./constant"

export function getCommonPrefixLength(a: string, b: string): number {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) {
    i++
  }
  return i
}

export const setClassActive = <T extends string>(
  selected: T,
  value: T,
  className: string
) => (selected === value ? className : "")

export const setDefaultValue = (currentValue: string, defaultValue: string) =>
  currentValue || defaultValue

export const parseBoolean = (value: TBooleanString): boolean => {
  return value === "true"
}

export const findProfileByCurrentUrl = (url: string): TProfile | undefined => {
  return Object.entries(SIDEBAR_MENUS).find(([, menus]) => {
    return menus.some((menu) => menu.url === url)
  })?.[0] as TProfile
}
