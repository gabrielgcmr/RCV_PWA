import { createContext } from "react";
import { PatientData } from "../interfaces/Interfaces";

export interface PatientContext {
  patientData: PatientData;
  
  updatePatientData: <S extends keyof PatientData>(
    section: S,
    field: Partial<PatientData[S]>
  ) => void;

  updateExam: (examName: string, examValue: string|number) => void;
  
  toggleProblem: (problemName: string) => void;
}


export const PatientContext = createContext<PatientContext | undefined>(undefined);