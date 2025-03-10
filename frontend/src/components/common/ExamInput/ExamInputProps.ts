import { ExamData } from "../../../interfaces/Interfaces";

export interface ExamInputProps extends ExamData {
    label: string; // Label do campo de input
    placeholder?: string; // Placeholder do campo
    errorMessage?: string; // Mensagem de erro personalizada
    disabled?: boolean; // Desativa o campo (opcional)
    onChange?: (name: string, value: string | number, abbreviation: string | undefined ) => void;
    options?: { label: string; value: string }[]
}  
