// src/context/SectionContext.tsx
import { createContext } from "react";

export type SectionState = {
  id: string;
  title: string;
  icon?: string;
};

export type SectionContextType = {
  minimizedSections: SectionState[];
  minimize: (section: SectionState) => void;
  restore: (id: string) => void;
  isVisible: (id: string) => boolean;
};

export const SectionContext = createContext<SectionContextType | undefined>(undefined);



