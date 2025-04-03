export interface Exam {
    name: string; // Nome completo do exame
    abbreviation?: string; // Abreviação para exibição
    value?: string; // Valor do exame
    unit?: string; // Unidade de medida (ex.: mg/dL, %)
    method?: string; // Método de realização do exame
    referenceRange?: string; // Intervalo de referência (ex.: "70-110 mg/dL")
  }
  
  export interface ComplementaryExams {
    date: Date | null;
    exams: Exam[];
  }