import { useContext } from "react";
import { SectionContext } from "../context/SectionContext";

export const useSectionContext = () => {
    const context = useContext(SectionContext);
    if (!context) throw new Error("SectionContext must be used within a SectionProvider");
    return context;
  };