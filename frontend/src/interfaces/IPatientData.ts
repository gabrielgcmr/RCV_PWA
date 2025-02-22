import { IComplementaryExams } from "./IExam";

export interface Problem {
  name: string; // Descrição do problema (ex.: "Diabetes Mellitus tipo 2")
  description?: string;
}

export interface ProblemList {
  problems: Problem[]; // Lista de problemas
}
export interface IPatientData {
  identification:{
    name: string;
    age: string;
    gender: string;
    race: string;
  };
  problemList: ProblemList;
  physicalExam:{ 
    systolicBP: string;
    diastolicBP: string;
  };
  lifeHabits:{
    isTreatingHAS: boolean;
    hasDiabetes: boolean;
    isSmoker: boolean;
  };
  complementaryExams: IComplementaryExams
} 
