// src/store/patient/physicalExamSlice.ts
import { StateCreator } from "zustand";
import { PhysicalExam } from "@/types";
import { PatientStore } from "./interface";

export interface PhysicalExamSlice {
  physicalExam: PhysicalExam;
  setPhysicalExamField: <K extends keyof PhysicalExam>(
    field: K,
    value: PhysicalExam[K]
  ) => void;
}

export const createPhysicalExamSlice: StateCreator<
  PatientStore,
  [['zustand/immer', never],['zustand/devtools', never]],
  [],
  PhysicalExamSlice
> = (set) => ({
  physicalExam: {
    systolicBP: "",
    diastolicBP: "",
  },
  setPhysicalExamField: (field, value) =>
    set((state) => {
      state.physicalExam[field] = value;
    }),
});
