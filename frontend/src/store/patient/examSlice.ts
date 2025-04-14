// src/store/patient/examSlice.ts

import { StateCreator } from "zustand";
import { Exam } from "@/types";
import { PatientStore } from "./interface";

export interface ExamSlice {
  exams: Exam[];
  addExam: (exam: Exam) => void;
  removeExamBykey: (key: string) => void;
  updateExamByKey: (key: string, data: Partial<Exam>) => void;
  setExams: (exams: Exam[]) => void;
  getExam: (key: string) => Exam | undefined;
}

export const createExamSlice: StateCreator<
  PatientStore,
  [["zustand/immer", never]],
  [],
  ExamSlice
> = (set,get) => ({
  exams: [],
  addExam: (exam) =>
    set((state) => {
      state.exams.push(exam);
    }),
  removeExamBykey: (key) =>
    set((state) => {
      const index = state.exams.findIndex((exam) => exam.key === key);
      if (index !== -1) {
        state.exams.splice(index, 1);
      }
    }),
  updateExamByKey: (key, data) =>
    set((state) => {
      const index = state.exams.findIndex((exam) => exam.key === key);
      if (index !== -1) {
        state.exams[index] = { ...state.exams[index], ...data };
      }
    }),
  setExams: (newExams) =>
    set((state) => {
      state.exams = newExams;
    }),
  getExam: (key:string): Exam | undefined => {
    return get().exams.find((exam) => exam.key === key)
    },
});
