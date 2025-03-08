export interface ExamData {
  name: string; // Nome completo do exame
  abbreviation?: string; // Abreviação para exibição
  value?: string | number; // Valor do exame
  unit?: string; // Unidade de medida (ex.: mg/dL, %)
  method?: string; // Método de realização do exame
  referenceRange?: string; // Intervalo de referência (ex.: "70-110 mg/dL")
}

export interface ComplementaryExamsData {
  date: Date;
  exams: Record<string, ExamData>;
}

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

// Tipos mapeados para cada seção
export type PatientDataSection = keyof PatientData;
export type PatientDataField<S extends PatientDataSection> = Extract<keyof PatientData[S], string>;
