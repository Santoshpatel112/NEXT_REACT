import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  descrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

