import { BaseInputProps } from "../components/common/Inputs/types";
/**
 * Função utilitária para criar objetos de entrada de exame.
 */
export const createExamInput = (
  name: string,
  abbreviation: string,
  label: string,
  placeholder: string,
  value: string = "",
  disabled: boolean = false
): BaseInputProps => ({
  name,
  abbreviation : abbreviation, 
  label,
  placeholder,
  value,
  disabled,
  errorMessage: "",
});



// Tipos discriminados para cada tipo de input
export type InputProps =
  | (BaseInputProps & { type: "text" | "number" }) // Textos e números
  | (BaseInputProps & { type: "radio"; checked: boolean }) // Radio
  | (BaseInputProps & { type: "checkbox"; checked: boolean }) // Checkbox
  | (BaseInputProps & { type: "select"; options: { label: string; value: string }[] } & SelectHTMLAttributes<HTMLSelectElement>) // Select
  | (BaseInputProps & { type: "textarea" } & TextareaHTMLAttributes<HTMLTextAreaElement>); // Textarea