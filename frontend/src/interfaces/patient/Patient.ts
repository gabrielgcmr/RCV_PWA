import { ComplementaryExams } from "./Exams";
import { Identification } from "./Identification";
import { PhysicalExam } from "./PhysicalExam";
import { PreventionList } from "./Preventions";
import { Problem } from "./Problems";


type CPF = string; // Poderia ser um tipo branded para validação
type CNS = string; // Idem
export interface ClinicalPatientData {
  identification: Identification
  preventionList: PreventionList;
  problemList: Problem[];
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
