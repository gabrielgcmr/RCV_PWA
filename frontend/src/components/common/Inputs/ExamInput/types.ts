import { BaseInputProps, BaseSelectInputProps } from "../BaseInput/types";

export interface ExamInputProps extends BaseInputProps {
  abbreviation: string; // Torna obrigatório para exames
};

//  **Selects para Exames** (Sempre têm abreviação)
export interface ExamSelectInputProps extends BaseSelectInputProps {
  abbreviation: string; // Torna obrigatório para exames
};