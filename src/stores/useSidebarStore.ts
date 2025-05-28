import { TProfile, ISidebarStore } from "@/types"
import { create } from "zustand"
import {
  getSelectedProfileFromCookie,
  setSelectedProfileToCookie,
} from "@/utils/cookie"

export const useSidebarStore = create<ISidebarStore>((set) => ({
  loading: true,
  selectedProfile: null,
  setLoading: (newLoading: boolean) => set(() => ({ loading: newLoading })),
  setSelectedProfile: (newProfile: TProfile) => {
    set(() => ({ selectedProfile: newProfile }))
    setSelectedProfileToCookie(newProfile)
  },
  initializeProfile: async () => {
    set({
      loading: true,
    })
    const profile = await getSelectedProfileFromCookie()
    set({
      selectedProfile: profile ?? "personal",
    })
    setTimeout(() => {
      set({ loading: false })
    }, 500)
  },
}))
