import { TBooleanString } from "@/types"

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
