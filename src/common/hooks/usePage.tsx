import { create } from "zustand"; 

export type usePageStore = {
  page: number
  setPage: (page: number) => void
  finalPage: boolean
  setFinalPage: (finalPage: boolean) => void
}

export default create<usePageStore>((set) => ({
  page: 0,
  setPage: (page: number) => set({ page }),
  finalPage: false,
  setFinalPage: (finalPage: boolean) => set({ finalPage })
}))
