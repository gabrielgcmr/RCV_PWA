// src/store/patient/clinicalHistorySlice.ts

import { StateCreator } from "zustand";
import { ClinicalPatient } from "@/types";
import { PatientStore } from "./interface";

export interface ClinicalHistorySlice {
  clinicalHistory: ClinicalPatient["clinicalHistory"];
  setClinicalHistorySection: (
    section: keyof ClinicalPatient["clinicalHistory"],
    value: string
  ) => void;
  setFullClinicalHistory: (
    data: ClinicalPatient["clinicalHistory"]
  ) => void;
}

export const createClinicalHistorySlice: StateCreator<
  PatientStore,
  [["zustand/immer", never],['zustand/devtools', never]],
  [],
  ClinicalHistorySlice
> = (set) => ({
  clinicalHistory: {
    identificationSection: "",
    allergiesSection: "",
    problemsSection: "",
    preventionSection: "",
    medicationSection: "",
    medicalHistorySection: "",
    examsSection: "",
    presentIllnessSection: "",
  },

  setClinicalHistorySection: (section, value) =>
    set((state) => {
      state.clinicalHistory[section] = value;
    }),

  setFullClinicalHistory: (data) =>
    set((state) => {
      state.clinicalHistory = data;
    }),
});
