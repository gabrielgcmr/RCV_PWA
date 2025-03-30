//context/PatienteContext.tsx
import { createContext } from "react";
import { PatientData } from "../interfaces/Patient";

interface PatientContextType {
  patientData: PatientData;
  updatePatientData: <T extends keyof PatientData>(
    field: T,
    value: Partial<PatientData[T]> // ✅ Agora aceita objetos parciais
  ) => void;
  updateExam: (examName: string, examValue: string) => void;
}

// Criando o contexto e exportando
export const PatientContext = createContext<PatientContextType | undefined>(undefined);
