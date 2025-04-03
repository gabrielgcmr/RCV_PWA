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
    age: string;
    gender: "Male" | "Female";
    race: string;
  };
  preventionList: PreventionList;
  problemList: {problems: Problem[]};
  physicalExam: {
    systolicBP: string;
    diastolicBP: string;
  };
  complementaryExams: ComplementaryExams;
}

