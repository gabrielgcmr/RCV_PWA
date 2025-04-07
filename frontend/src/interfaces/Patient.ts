import { ComplementaryExams } from "./Exam";
import { PreventionList } from "./Prevention";
import { ProblemList } from "./Problem";
export interface Patient {
  meta?: {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  administrativeIdentification: {
    fullName: string;
    cns: string; // Cartão do SUS
    cpf: string;
    healthInsurance?: string;
  }
  clinicalIdentification: {
    age: number;
    gender: 'male' | 'female' | 'other';
    race: string;
  };
  contactInformation: {
    phone?: string;
    email?: string;
    address?: string;
  };
  preventionList: PreventionList;
  problemList: ProblemList;
  physicalExam: {
    systolicBP:  string;
    diastolicBP:  string;
  };
  complementaryExams: ComplementaryExams;
}

