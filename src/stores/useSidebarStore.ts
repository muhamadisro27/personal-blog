import { TProfile, ISidebarStore } from "@/types"
import { create } from "zustand"
import { setSelectedProfileToCookie } from "@/utils/cookie"

export const useSidebarStore = create<ISidebarStore>((set) => ({
  selectedProfile: null,
  setSelectedProfile: (newProfile: TProfile) => {
    set(() => ({ selectedProfile: newProfile }))
    setSelectedProfileToCookie(newProfile)
  },
}))
