export type TFeaturePersonal = "home" | "about" | "contact"
export type TFeatureHobbies = "run" | "books"
export type TFeatureAsset = "reksadana" | "gold"

export type TFeatureKey = TFeatureAsset | TFeatureHobbies | TFeaturePersonal

export type TFeatureFlagMap = {
  [K in TFeatureKey]: string | undefined | boolean
}
