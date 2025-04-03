//context/PatienteContext.tsx
import { createContext } from "react";
import { Patient } from "../interfaces/Patient";

interface PatientContextType {
  patient: Patient;
  updatePatient: <T extends keyof Patient>(
    field: T,
    value: Partial<Patient[T]>
  ) => void;
  updateExam: (field: string, value: string) => void;
}

export const PatientContext = createContext<PatientContextType | undefined>(undefined);
