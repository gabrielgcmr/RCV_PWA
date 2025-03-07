// PatientData.ts
import { ComplementaryExamsData } from "./ExamData";

export interface IdentificationData {
  name: string;
  age: string;
  gender: string;
  race: string;
}

export interface Problem {
  name: string;
  abbreviation?: string;
  description?: string;
}

export interface ProblemListData {
  problems: Problem[];
}

export interface PhysicalExamData {
  systolicBP: string;
  diastolicBP: string;
}

export interface PatientData {
  identification: IdentificationData;
  problemList: ProblemListData;
  physicalExam: PhysicalExamData;
  complementaryExams: ComplementaryExamsData;
}

// Para mapear as seções do formulário com as chaves de PatientData, você pode criar um tipo auxiliar:
export type PatientDataSection = keyof PatientData; // "identification" | "problemList" | "physicalExam" | "complementaryExams"
