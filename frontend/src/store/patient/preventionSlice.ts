// src/store/patientSlices/preventionSlice.ts
import { StateCreator } from "zustand";
import { Prevention } from "@/types";
import { PatientStore } from "./interface";
import generatePreventions from "@/core/clinical/preventions/generatePreventions";

export interface PreventionSlice {
  preventions: Prevention[];
  addPrevention: (prevention: Prevention) => void;
  removePreventionByIndex: (index: number) => void;
  updatePreventionByIndex: (index: number, data: Partial<Prevention>) => void;
  setPreventions: (preventions: Prevention[]) => void;
  getPreventionByName: (name: string) => Prevention | undefined
  upsertPrevention: (prevention: Prevention) => void
  syncPreventions: () =>void
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

  syncPreventions: () => {
    // 1) Pega TODO o paciente
    const patient = get() as any; // cast para ClinicalPatientData
    // 2) Gera array de prevenções (auto + futuras manuais, se quiser)
    const autos = generatePreventions(patient);
    // 3) Upserta cada uma
    autos.forEach((p) => get().upsertPrevention(p));
  },
});
