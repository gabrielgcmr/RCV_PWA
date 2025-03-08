import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { PatientData, PatientDataField } from "../../../interfaces/Interfaces";

// Interface unificada para BaseInputProps
export interface BaseInputProps <S extends keyof PatientData> extends InputHTMLAttributes<HTMLInputElement>{
  name: PatientDataField<S>
  section: S
  label?: string;
  type: "text" | "number" | "checkbox" | "radio"
  errorMessage?: string;
}
// Interface para selects
export interface BaseSelectInputProps <S extends keyof PatientData> extends SelectHTMLAttributes<HTMLSelectElement>{
  name: PatientDataField<S>
  section: S
  label?: string;
  type: "select";
  errorMessage?: string;
  options: { label: string; value: string }[];
};