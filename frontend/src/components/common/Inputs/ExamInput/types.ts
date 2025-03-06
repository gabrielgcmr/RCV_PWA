import { BaseInputProps, BaseSelectInputProps } from "../BaseInput/types";

export type ExamInputProps = BaseInputProps & {
  abbreviation: string; // Torna obrigatório para exames
};

//  **Selects para Exames** (Sempre têm abreviação)
export type ExamSelectInputProps = BaseSelectInputProps & {
  abbreviation: string; // Torna obrigatório para exames
};