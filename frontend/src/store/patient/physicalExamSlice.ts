// src/store/patient/physicalExamSlice.ts
import { StateCreator } from "zustand";
import { PhysicalExam } from "@/types";
import { PatientStore } from ".";

export interface PhysicalExamSlice {
  physicalExam: PhysicalExam;
  setSystolicBP: (systolicBP: string) => void;
  setDiastolicBP: (diastolicBP: string) => void;
}

export const createPhysicalExamSlice: StateCreator<
  PatientStore,
  [['zustand/immer', never]],
  [],
  PhysicalExamSlice
> = (set) => ({
  physicalExam: {
    systolicBP: "",
    diastolicBP: "",
  },
  setSystolicBP: (systolicBP) =>
    set((state) => {
      state.physicalExam.systolicBP = systolicBP;
    }),
  setDiastolicBP: (diastolicBP) => 
    set((state) => {
      state.physicalExam.diastolicBP = diastolicBP;
    }), 
});
