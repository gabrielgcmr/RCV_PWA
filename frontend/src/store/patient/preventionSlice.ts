// src/store/patientSlices/preventionSlice.ts
import { StateCreator } from "zustand";
import { ClinicalPatientData, Prevention } from "@/types";
import { PatientStore } from "./interface";
import { buildEgfrPrevention } from "@/core/clinical/Renal/preventions/buildEgfrPrevention";

export interface PreventionSlice {
  preventions: Prevention[];
  addPrevention: (prevention: Prevention) => void;
  removePreventionByIndex: (index: number) => void;
  updatePreventionByIndex: (index: number, data: Partial<Prevention>) => void;
  setPreventions: (preventions: Prevention[]) => void;
  getPreventionByName: (name: string) => Prevention | undefined
  upsertPrevention: (prevention: Prevention) => void
}

export const createPreventionSlice: StateCreator<
  PatientStore,
  [['zustand/immer', never],['zustand/devtools', never]],
  [], 
  PreventionSlice
> = (set, get) => ({
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

  getPreventionByName:(name:string): Prevention | undefined =>{
    return get().preventions.find((prevention) => prevention.name === name)
  },

  upsertPrevention: (prevention) =>
    set((state) => {
      const idx = state.preventions.findIndex((p) => p.name === prevention.name);
      if (idx >= 0) Object.assign(state.preventions[idx], prevention);
      else state.preventions.push(prevention);
    }),

  refreshPreventions() {
    const patient: ClinicalPatientData = get();
    set(state => {
      state.preventions = [buildEgfrPrevention(patient)];
    });
  }
});
