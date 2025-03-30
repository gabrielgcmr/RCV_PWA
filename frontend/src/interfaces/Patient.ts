export interface ExamData {
  name: string; // Nome completo do exame
  abbreviation?: string; // Abreviação para exibição
  value?: string | number; // Valor do exame
  unit?: string; // Unidade de medida (ex.: mg/dL, %)
  method?: string; // Método de realização do exame
  referenceRange?: string; // Intervalo de referência (ex.: "70-110 mg/dL")
}

export interface ComplementaryExamsData {
  date: Date | null;
  exams: ExamData[];
}

export interface ProblemData {
  name: string; // Descrição do problema (ex.: "Diabetes Mellitus tipo 2")
  description?: string;
}

export interface ProblemListData {
  problems: ProblemData[]; // Lista de problemas
}
export interface PatientData {
  identification:{
    name: string;
    age: number | string;
    gender: string;
    race: string;
  };
  problemList: ProblemListData;
  physicalExam:{ 
    systolicBP: number | string;
    diastolicBP: number | string;
  };
  complementaryExams: ComplementaryExamsData
} 
