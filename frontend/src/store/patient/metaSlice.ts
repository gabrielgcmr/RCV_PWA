// src/store/patient/metaSlice.ts
import { StateCreator } from "zustand";
import { PatientStore } from "./interface";
import initialPatientState from "@/constants/initialPatientState";

export interface MetaSlice {
  resetPatient: () => void;
}

export const createMetaSlice: StateCreator<
  PatientStore,
  [["zustand/immer", never],['zustand/devtools', never]],
  [],
  MetaSlice
> = (set) => ({
  resetPatient: () => set(() => initialPatientState),
});
