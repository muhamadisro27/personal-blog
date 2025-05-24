export type TProfile = "personal" | "hobbies" | "asset"

export type TProfileMap = {
  [P in TProfile]: IProfile<P>
}

export interface IProfile<T extends TProfile> {
  title: string
  value: T
  icon : ReactNode
}
