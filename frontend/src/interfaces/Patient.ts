import { ComplementaryExams } from "./Exams";
import { PreventionList } from "./Preventions";
import { Problem } from "./Problems";
export interface Patient {
  meta?: {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  identification: {
    name: string;
    age: number | string;
    gender: "Male" | "Female";
    race: string;
  };
  preventionList: PreventionList;
  problemList: {problems: Problem[]};
  physicalExam: {
    systolicBP: number | string;
    diastolicBP: number | string;
  };
  complementaryExams: ComplementaryExams;
}

