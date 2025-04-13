// src/store/patient/identificationSlice.ts

import { StateCreator } from "zustand";
import { Identification } from "@/types";
import { PatientStore } from "./interface";

export interface IdentificationSlice {
  identification: Identification;
  setIdentificationField: <K extends keyof Identification>(
    field: K,
    value: Identification[K]
  ) => void;
}

export const createIdentificationSlice: StateCreator<
  PatientStore,
  [['zustand/immer', never]],
  [],
  IdentificationSlice
> = (set) => ({
  identification: {
    fullName: "",
    age: "",
    gender: "",
    race: "",
  },
  setIdentificationField: (field, value) =>
    set((state) => {
      state.identification[field] = value;
    }),
});
