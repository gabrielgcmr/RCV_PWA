// src/store/patient/identificationSlice.ts

import { StateCreator } from "zustand";
import { Identification } from "@/types";
import { PatientStore } from "./interface";

export interface IdentificationSlice {
  identification: Identification;
  setFullName: (fullName: string) => void;
  setAge: (age: string) => void;
  setGender: (gender: string) => void;
  setRace: (race: string) => void;
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

  setFullName: (fullName) =>
    set((state) => {   
      state.identification.fullName = fullName;    
    }),

  setAge: (age) =>
    set((state) => {
      state.identification.age = age;
    }),

  setGender: (gender) =>
    set((state) => {
      state.identification.gender = gender;
    }),

  setRace: (race) =>
    set((state) => {
      state.identification.race = race;
    }),
});
