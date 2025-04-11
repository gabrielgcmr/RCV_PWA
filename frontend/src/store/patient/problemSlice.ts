// src/store/patient/problemSlice.ts
import { StateCreator } from "zustand";
import { Problem, ClinicalPatientData } from "@/types";

export interface ProblemSlice {
  problems: Problem[];
  toggleProblem: (name: string, shouldAdd: boolean) => void;
  hasProblem: (name: string) => boolean;
}

export const createProblemSlice: StateCreator<
  ClinicalPatientData & ProblemSlice,
  [],
  [],
  ProblemSlice
> = (set, get) => ({
  problems: [],
  hasProblem: (name) => {
    return get().problems.some((p) => p.name === name);
  },
  toggleProblem: (name, shouldAdd) => {
    const current = get().problems;
    let updated: Problem[];
    if (shouldAdd) {
      if (!current.some((p) => p.name === name)) {
        updated = [...current, { name }];
      } else {
        updated = current;
      }
    } else {
      updated = current.filter((p) => p.name !== name);
    }
    set({ problems: updated });
  },
});
