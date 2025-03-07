import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

export type FormSection = "identification" | "problemList" | "physicalExam";

// União dos tipos
export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: "text" | "number" | "checkbox" | "radio" 
  formSection: FormSection
  checked?: boolean;
  errorMessage?: string;
};

// Interface para selects
export interface BaseSelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  type: "select";
  formSection: FormSection
  errorMessage?: string;
  options: { label: string; value: string }[];
};