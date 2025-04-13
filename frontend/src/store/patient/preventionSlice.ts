// src/store/patientSlices/preventionSlice.ts
import { StateCreator } from "zustand";
import { Prevention } from "@/types";
import { PatientStore } from "./interface";

export interface PreventionSlice {
  preventions: Prevention[];
  addPrevention: (prevention: Prevention) => void;
  removePreventionByIndex: (index: number) => void;
  updatePreventionByIndex: (index: number, data: Partial<Prevention>) => void;
  setPreventions: (preventions: Prevention[]) => void;
}

export const createPreventionSlice: StateCreator<
  PatientStore,
  [['zustand/immer', never]],
  [], 
  PreventionSlice
> = (set) => ({
  preventions: [],
  addPrevention: (prevention) =>
    set((state) => {
      state.preventions.push(prevention)
    }),
  removePreventionByIndex: (index) =>
    set((state) => {
      state.preventions.splice(index, 1);
    }),
  updatePreventionByIndex: (index, data) =>
    set((state) => {
      const prevention = state.preventions[index];
      if (prevention) {
        state.preventions[index] = { ...prevention, ...data };
      }
    }),
    setPreventions: (newPreventions) =>
      set((state) => {
        state.preventions = newPreventions;
      }),
});
