import { Airport } from "@/types/airports";
import { create } from "zustand";

interface AirportStore {
  airports: Airport[];
  setAirports: (airports: Airport[]) => void;
}

export const useAirportStore = create<AirportStore>((set) => ({
  airports: [],
  setAirports: (airports) => set(() => ({ airports })),
}));
