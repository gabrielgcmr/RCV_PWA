import { ExamData } from "../../interfaces/Interfaces";

export interface ExamInputPropsBase extends ExamData {
    label: string; // Label do campo de input
    placeholder?: string; // Placeholder do campo
    errorMessage?: string; // Mensagem de erro personalizada
    disabled?: boolean; // Desativa o campo (opcional)
    onChange?: (name: string, value: string | number ) => void;
}  

export interface ExamSelectInputProps extends ExamInputPropsBase {
    inputType: "select";
    options: { label: string; value: string }[]; // Agora `options` é obrigatório para selects
  }
  
  export interface ExamTextInputProps extends ExamInputPropsBase {
    inputType: "input";
  }
  
  export type ExamInputProps = ExamSelectInputProps | ExamTextInputProps;