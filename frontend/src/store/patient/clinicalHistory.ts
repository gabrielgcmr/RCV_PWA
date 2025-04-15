// src/store/patient/clinicalHistorySlice.ts

import { StateCreator } from "zustand";
import { ClinicalPatientData } from "@/types";
import { PatientStore } from "./interface";

export interface ClinicalHistorySlice {
  clinicalHistory: ClinicalPatientData["clinicalHistory"];
  setClinicalHistorySection: (
    section: keyof ClinicalPatientData["clinicalHistory"],
    value: string
  ) => void;
  setFullClinicalHistory: (
    data: ClinicalPatientData["clinicalHistory"]
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
