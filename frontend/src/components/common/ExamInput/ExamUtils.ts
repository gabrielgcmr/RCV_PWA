import { IExamInputProps } from "./IExamInputProps";

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
): IExamInputProps => ({
  name,
  abbreviation : abbreviation, 
  label,
  placeholder,
  value,
  disabled,
  errorMessage: "",
});
