// src/store/patient/problemSlice.ts
import { StateCreator } from "zustand";
import { Problem } from "@/types";
import { PatientStore } from "./interface";

export interface ProblemSlice {
  problems: Problem[];
  addProblem: (problem: Problem) => void;
  removeProblemByKey: (key: string) => void;
  updateProblemByKey: (key: string, data: Partial<Problem>) => void;
  setProblems: (problems: Problem[]) => void;
  getProblem: (key: string) => Problem | undefined;
  
}

export const createProblemSlice: StateCreator<
  PatientStore,
  [["zustand/immer", never]],
  [],
  ProblemSlice
> = (set,get) => ({
  problems: [],
  addProblem: (problem) =>
    set((state) => {
      state.problems.push(problem);
    }),
  removeProblemByKey: (key) =>
    set((state) => {
      const index = state.problems.findIndex((problem) => problem.key === key);
      if (index !== -1) {
        state.problems.splice(index, 1);
      }
    }),
  updateProblemByKey: (key, data) =>
    set((state) => {
      const index = state.problems.findIndex((problem) => problem.key === key);
      if (index !== -1) {
        state.problems[index] = { ...state.problems[index], ...data };
      }
    }),
  setProblems: (newProblems) =>
    set((state) => {
      state.problems = newProblems;
    }),
  getProblem: (key: string): Problem | undefined => {
    return get().problems.find((problem) => problem.key === key);
  },
  
});