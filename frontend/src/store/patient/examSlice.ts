// src/store/patient/examSlice.ts

import { StateCreator } from "zustand";
import { Exam } from "@/types";
import { PatientStore } from "./interface";

export interface ExamSlice {
  exams: Exam[];
  addExam: (exam: Exam) => void;
  removeExamByName: (name: string) => void;
  updateExamByName: (name: string, data: Partial<Exam>) => void;
  setExams: (exams: Exam[]) => void;
}

export const createExamSlice: StateCreator<
  PatientStore,
  [["zustand/immer", never]],
  [],
  ExamSlice
> = (set) => ({
  exams: [],
  addExam: (exam) =>
    set((state) => {
      state.exams.push(exam);
    }),
  removeExamByName: (name) =>
    set((state) => {
      const index = state.exams.findIndex((exam) => exam.name === name);
      if (index !== -1) {
        state.exams.splice(index, 1);
      }
    }),
  updateExamByName: (name, data) =>
    set((state) => {
      const index = state.exams.findIndex((exam) => exam.name === name);
      if (index !== -1) {
        state.exams[index] = { ...state.exams[index], ...data };
      }
    }),
  setExams: (newExams) =>
    set((state) => {
      state.exams = newExams;
    }),
});
