//context/PatienteContext.tsx
import { createContext } from "react";
import { ClinicalPatientData } from "../interfaces";

interface PatientContextType {
  patient: ClinicalPatientData;
  updatePatient: <T extends keyof ClinicalPatientData>(
    field: T,
    value: Partial<ClinicalPatientData[T]> // ✅ Agora aceita objetos parciais
  ) => void;
  updateExam: (examName: string, examValue: string) => void;
}

// Criando o contexto e exportando
export const PatientContext = createContext<PatientContextType | undefined>(undefined);
