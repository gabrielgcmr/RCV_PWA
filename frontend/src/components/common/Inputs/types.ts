import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

export type InputType = "text" | "number" | "checkbox" | "radio" | "select";

// Interface para inputs comuns (text, number, checkbox, radio)
interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: Exclude<InputType, "select">;
  checked?: boolean; // Apenas para checkbox e radio
}

// Interface para selects
interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  type: "select";
  options?: { option: string; value: string }[]; // options só existe para selects
}

// União dos tipos
export type GenericInputProps = (BaseInputProps | SelectInputProps) & {
  name: string;
  label: string;
  abbreviation?: string;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};