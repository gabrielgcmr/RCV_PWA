import { useState } from "react";
import { SectionContext, SectionState } from "./SectionContext";

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [minimizedSections, setMinimizedSections] = useState<SectionState[]>(
    []
  );

  const minimize = (section: SectionState) => {
    setMinimizedSections((prev) => {
      // Garante que não seja duplicado
      if (prev.some((s) => s.id === section.id)) return prev;
      return [...prev, section];
    });
  };

  const restore = (id: string) => {
    setMinimizedSections((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SectionContext.Provider value={{ minimizedSections, minimize, restore }}>
      {children}
    </SectionContext.Provider>
  );
}
