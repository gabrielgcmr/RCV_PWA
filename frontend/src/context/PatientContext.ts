//context/PatienteContext.tsx
import { createContext } from "react";
import { Patient } from "../interfaces/Patient";

interface PatientContextType {
  patient: Patient;
  updatePatient: <T extends keyof Patient>(
    field: T,
    value: Partial<Patient[T]> // ✅ Agora aceita objetos parciais
  ) => void;
  updateExam: (examName: string, examValue: string) => void;
}

// Criando o contexto e exportando
export const PatientContext = createContext<PatientContextType | undefined>(undefined);
