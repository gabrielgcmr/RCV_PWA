import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { PatientData } from "../../../../interfaces/PatientData";

type InputType = "text" | "number" | "checkbox" | "radio" ;

// União dos tipos
export type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  type: InputType;
  section: keyof PatientData
  checked?: boolean;
  errorMessage?: string;
};

// Interface para selects
export type BaseSelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  type: "select";
  section: keyof PatientData
  errorMessage?: string;
  options: { label: string; value: string }[];
};