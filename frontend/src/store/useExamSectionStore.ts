// src/store/useExamSectionStore.ts
import { create } from "zustand";

type ExamSectionStore = {
  minimizedExamForms: string[];
  minimizeExamForm: (category: string) => void;
  restoreExamForm: (category: string) => void;
};

export const useExamSectionStore = create<ExamSectionStore>((set) => ({
  minimizedExamForms: ["Inflamatory"],
  minimizeExamForm: (category) =>
    set((state) => ({
      minimizedExamForms: [...state.minimizedExamForms, category],
    })),
  restoreExamForm: (category) =>
    set((state) => ({
      minimizedExamForms: state.minimizedExamForms.filter(
        (c) => c !== category
      ),
    })),
}));
