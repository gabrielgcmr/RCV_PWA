import { InputHTMLAttributes} from "react";
  
export interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  name: string;
  label: string;
  errorMessage?: string;
}


