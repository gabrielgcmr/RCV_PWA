import { useCallback, useState } from "react";
import { SectionContext, SectionState } from "./SectionContext";

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [minimizedSections, setMinimizedSections] = useState<SectionState[]>(
    []
  );

  const minimize = useCallback((section: SectionState) => {
    setMinimizedSections((prev) =>
      prev.some((s) => s.id === section.id) ? prev : [...prev, section]
    );
  }, []);

  const restore = useCallback((id: string) => {
    setMinimizedSections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const isVisible = useCallback(
    (id: string) => !minimizedSections.some((s) => s.id === id),
    [minimizedSections]
  );

  return (
    <SectionContext.Provider
      value={{ minimizedSections, minimize, restore, isVisible }}
    >
      {children}
    </SectionContext.Provider>
  );
}
