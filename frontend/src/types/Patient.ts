export interface Identification {
  fullName: string;
  age: string;
  gender: string;
  race: string;
}

export interface Prevention {
  name: string;
  abbreviation?: string;
  value?: number | string;
  referenceValue?: number | string;
  unit?: string;
  classification?: string;
  description?: string;
  other?: string;
  errors?: string[];
}

export interface Problem {
  key: string;
  label?: string;
  code?: string;
  codeSystem?:"CIAP2" | "CID10" | "CID11"| "MostCommon" | "Other";
  abbreviation?: string;
  description?: string;
  dateOfOnset?: string;
  otherDetails?: string;
  errors?: string[];
  // Campos adicionais baseados nos sistemas de codificação:
  chapter?: string; // Para CIAP-2
  inclusionTerms?: string[]; // Para CID
  exclusionTerms?: string[]; // Para CID
  codingNotes?: string; // Para CID
  parentCode?: string; // Para CID (para refletir hierarquia)
}

export interface PhysicalExam{
  systolicBP: string;
  diastolicBP: string;
  // Add other properties as needed
}
export interface Exam {
  key: string; // Nome completo do exame
  label?: string;
  category?: string; // Categoria do exame (ex: 'LipidProfile')
  abbreviation?: string; // Abreviação para exibição
  value?: string ; // Valor do exame
  unit?: string; // Unidade de medida (ex.: mg/dL, %)
  method?: string; // Método de realização do exame
  referenceRange?: string; // Intervalo de referência (ex.: "70-110 mg/dL")
  date?: string; // agora cada exame tem sua própria data
  errors?: string[];
  code?: string; // Código do exame (ex: código LOINC)
  codeSystem?: "LOINC" | "TUSS" | "SUS" | "MostCommon" | "Other"; // Sistema de codificação do exame
}
export interface ClinicalPatientData {
  identification: Identification
  preventions: Prevention[];
  problems: Problem[];
  physicalExam: PhysicalExam;
  exams: Exam[];
  clinicalHistory: {
    identificationSection: string;
    allergiesSection: string;
    problemsSection: string;
    preventionSection: string;
    medicationSection: string;
    medicalHistorySection: string;
    examsSection: string;
    presentIllnessSection: string;
  }
}

type CPF = string; // Poderia ser um tipo branded para validação
type CNS = string; // Idem
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
