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
  name: string;
  present: boolean;
  details?: {
    analyzedAt?: string;
    [key: string]: any; // outros dados específicos do problema
  };
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
