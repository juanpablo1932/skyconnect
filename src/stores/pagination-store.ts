import { create } from "zustand";

interface PaginationStore {
  offset: number;
  currentPage: number;
  goToPrevious: () => void;
  goToNext: () => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  offset: 0,
  currentPage: 1,
  goToPrevious: () =>
    set((state) => ({
      currentPage: Math.max(1, state.currentPage - 1),
      offset: state.offset - 6,
    })),
  goToNext: () =>
    set((state) => ({
      currentPage: state.currentPage + 1,
      offset: state.offset + 6,
    })),
}));
