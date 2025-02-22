import { IExam } from "../../../interfaces/IExam";

export interface IExamInputProps extends IExam {
    label: string; // Label do campo de input
    placeholder: string; // Placeholder do campo
    errorMessage?: string; // Mensagem de erro personalizada
    disabled?: boolean; // Desativa o campo (opcional)
    onChange?: (name: string, value: string | number, abbreviation: string | undefined ) => void;
}  