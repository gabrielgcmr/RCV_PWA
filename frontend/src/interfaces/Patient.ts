

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
  name?: string;
  code?: string;
  codeSystem?:"CIAP2" | "CID11" | "other";
  abreviation?: string;
  description?: string;
  dateOfOnset?: string;
  otherDetails?: string;
  errors?: string[];
}


export interface PhysicalExam{
  systolicBP: string;
  diastolicBP: string;
  // Add other properties as needed
}

export interface Exam {
  name: string; // Nome completo do exame
  abbreviation?: string; // Abreviação para exibição
  value?: string | number; // Valor do exame
  unit?: string; // Unidade de medida (ex.: mg/dL, %)
  method?: string; // Método de realização do exame
  referenceRange?: string; // Intervalo de referência (ex.: "70-110 mg/dL")
  date?: string; // agora cada exame tem sua própria data
  errors?: string[];
}

export interface ClinicalPatientData {
  identification: Identification
  preventions: Prevention[];
  problems: Problem[];
  physicalExam: PhysicalExam;
  exams: Exam[];
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
