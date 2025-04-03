import { ComplementaryExams } from "./Exams";
import { PreventionList } from "./Preventions";
import { ProblemList } from "./Problems";
export interface Patient {
  meta?: {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  identification: {
    name: string;
    age: number | string;
    gender: string;
    race: string;
  };
  preventionList: PreventionList;
  problemList: ProblemList;
  physicalExam: {
    systolicBP: number | string;
    diastolicBP: number | string;
  };
  complementaryExams: ComplementaryExams;
}

