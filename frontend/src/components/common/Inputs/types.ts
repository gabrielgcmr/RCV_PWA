export interface Option {
    label: string;
    value: string;
  }
  
export interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "number" | "email" | "password" | "select" | "radio" | "checkbox";
  placeholder?: string;
  value: string | number;
  disabled?: boolean;
  options?: Option[]; // Usado apenas para selects
  errorMessage?: string;
  onChange: (name: string, value: string | number) => void;
  className?: string;
  inputClassName?: string; // Estilização personalizada para o input/select
  errorClassName?: string; // Estilização personalizada para a mensagem de erro
}

export interface TextInputProps extends InputProps {
  ariaInvalid?: boolean; // Propriedade específica para acessibilidade
  ariaDescribedby?: string; // Propriedade específica para acessibilidade
}

export interface RadioInputProps extends InputProps {
  checked: boolean; // Propriedade específica para radios
}

export interface CheckboxInputProps extends InputProps {
  checked: boolean; // Propriedade específica para checkboxes
}

export interface SelectInputProps extends InputProps {
  options: Option[]; // Propriedade específica para selects
}