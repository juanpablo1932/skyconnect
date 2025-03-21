import { Airport } from "@/types/airports";
import { create } from "zustand";

interface AirportStore {
  airports: Airport[];
  offset: number;
  currentPage: number;
  setAirports: (airports: Airport[]) => void;
  updateAirports: (airports: Airport[]) => void;

  goToPrevious: () => void;
  goToNext: () => void;
}

export const useAirportStore = create<AirportStore>((set) => ({
  airports: [],
  offset: 0,
  currentPage: 1,
  setAirports: (airports) => set(() => ({ airports })),
  updateAirports: (newAirports) =>
    set((state) => {
      const mergedAirports = [
        ...state.airports,

        ...newAirports.filter(
          (airport) => !state.airports.some((a) => a.id === airport.id)
        ),
      ];
      return { airports: mergedAirports };
    }),
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
