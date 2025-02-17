import { useContext } from "react";
import { PatientContext } from "./PatientContext";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }
  return context;
}
