// src/store/patient/problemSlice.ts
import { StateCreator } from "zustand";
import { Problem } from "@/types";
import { PatientStore } from "./interface";

export interface ProblemSlice {
  problems: Problem[];
  addProblem: (problem: Problem) => void;
  removeProblembyName: (name: string) => void;
  updateProblembyName: (name: string, data: Partial<Problem>) => void;
  setProblems: (problems: Problem[]) => void;
}

export const createProblemSlice: StateCreator<
  PatientStore,
  [["zustand/immer", never]],
  [],
  ProblemSlice
> = (set) => ({
  problems: [],
  addProblem: (problem) =>
    set((state) => {
      state.problems.push(problem) 
    }),
  removeProblembyName: (name) =>
    set((state) => {
      const index = state.problems.findIndex((problem) => problem.key === name);
      if (index !== -1) {
        state.problems.splice(index, 1);
      }
    }),
  updateProblembyName: (name, data) =>
    set((state) => {
      const index = state.problems.findIndex((problem) => problem.key === name);
      if (index !== -1) {
        state.problems[index] = { ...state.problems[index], ...data };
      }
    }
  ),
  setProblems: (newProblems) =>
    set((state) => {
      state.problems = newProblems;
    }),
});
