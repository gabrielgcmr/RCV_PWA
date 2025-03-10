export interface Option {
    label: string;
    value: string;
  }
  
export interface BaseInputProps {
  id?:string
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  className?: string;
}

export interface TextInputProps extends BaseInputProps {
  value: string | number;
  onChange: (name: string, value: string | number) => void;
}

export interface RadioInputProps extends BaseInputProps {
  value: string | number;
  checked: boolean;
  onChange: (name: string, value: string | number) => void;
}

export interface CheckboxInputProps extends BaseInputProps {
  checked: boolean;
  onChange: (name: string, checked: boolean) => void
}

export interface SelectInputProps extends BaseInputProps {
  value: string | number;
  options: Option[];
  onChange: (name: string, value: string | number) => void;
}

export type InputProps = TextInputProps | SelectInputProps | RadioInputProps | CheckboxInputProps;