// src/store/useSectionStore.ts
import { create } from "zustand";

type SectionState = {
  id: string;
  title: string;
  icon?: string;
};

interface SectionStore {
  minimizedSections: SectionState[];
  minimize: (section: SectionState) => void;
  restore: (id: string) => void;
  isVisible: (id: string) => boolean;
}

export const useSectionStore = create<SectionStore>((set, get) => ({
  minimizedSections: [ ],

  minimize: (section) =>
    set((state) => {
      if (state.minimizedSections.some((s) => s.id === section.id))
        return state;
      return {
        minimizedSections: [...state.minimizedSections, section],
      };
    }),

  restore: (id) =>
    set((state) => ({
      minimizedSections: state.minimizedSections.filter((s) => s.id !== id),
    })),

  isVisible: (id) => !get().minimizedSections.some((s) => s.id === id),
}));
