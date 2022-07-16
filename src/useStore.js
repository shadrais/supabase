import create from 'zustand'

export const useStore = create((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn) => set((state) => ({ loggedIn })),
  modalOpen: false,
  setModalOpen: (modalOpen) => set((state) => ({ modalOpen })),
  //   bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}))
