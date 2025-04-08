import { ComplementaryExams } from "./Patient/Exam";
import { PhysicalExam } from "./Patient/PhysicalExam";
import { PreventionList } from "./Patient/Prevention";
import { ProblemList } from "./Patient/Problem";

// Tipos auxiliares
type CPF = string; // Poderia ser um tipo branded para validação
type CNS = string; // Idem
export interface ClinicalPatientData {
  identification: {
    fullName: string;
    age: string;
    gender: string;
    race: string;
  };
  preventionList: PreventionList;
  problemList: ProblemList;
  physicalExam: PhysicalExam;
  complementaryExams: ComplementaryExams;
}
export interface AdministrativeData {
  fullName: string;
  cns: CNS
  cpf: CPF
  contactInformation?: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

export interface MetaData{
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PatientData extends ClinicalPatientData, AdministrativeData, MetaData {}

export type PatientState = ClinicalPatientData

