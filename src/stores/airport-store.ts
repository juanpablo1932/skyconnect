import { Airport } from "@/types/airports";
import { create } from "zustand";

export const useAirportStore = create((set) => ({
  airports: [],
  setAirports: (airports: Airport) => set({ airports }),
}));
