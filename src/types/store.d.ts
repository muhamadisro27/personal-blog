import { TProfile } from "./profile"

export interface ISidebarStore {
  loading: boolean
  selectedProfile: TProfile | null
  setLoading: (newLoading: boolean) => void
  setSelectedProfile: (newProfile: TProfile) => void
  initializeProfile: () => void
}
