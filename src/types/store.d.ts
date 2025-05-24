import { TProfile } from "./profile"

export interface ISidebarStore {
  selectedProfile: TProfile | null
  setSelectedProfile: (newProfile: TProfile) => void
}
