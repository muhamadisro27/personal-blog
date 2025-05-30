export type TPagePersonal =
  | "home"
  | "about"
  | "contact"
  | "article"
  | "detail-article"
export type TPageHobbies = "run" | "books"
export type TPageAsset = "reksadana" | "gold"

export type TPageKey = TPageAsset | TPageHobbies | TPagePersonal

export type TPageFlagMap = {
  [K in TPageKey]: string | undefined | boolean
}
