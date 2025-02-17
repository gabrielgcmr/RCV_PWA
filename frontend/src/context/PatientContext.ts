import { createContext } from "react";
import { IPatientData } from "../interfaces/IPatientData";

interface PatientContextType {
  patientData: IPatientData;
  updatePatientData: <T extends keyof IPatientData>(
    field: T,
    value: Partial<IPatientData[T]> // ✅ Agora aceita objetos parciais
  ) => void;
  updateExam: (examName: string, examValue: string) => void;
}

// Criando o contexto e exportando
export const PatientContext = createContext<PatientContextType | undefined>(undefined);
