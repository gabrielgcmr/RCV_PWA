import { createContext } from "react";
import { PatientData, ProblemData } from "../interfaces/Interfaces";

interface PatientContextType {
  patientData: PatientData;
  updateIdentification: (value: Partial<PatientData["identification"]>) => void;
  updatePhysicalExam: (value: Partial<PatientData["physicalExam"]>) => void;
  updateExam: (examName: string, examValue: string| number) => void;
  updateProblemList: (problems: ProblemData[]) => void;
  updateProblems: ()=> void;
  updateExamDate: (date: Date | null) => void;

}

// Criando o contexto e exportando
export const PatientContext = createContext<PatientContextType | undefined>(undefined);
