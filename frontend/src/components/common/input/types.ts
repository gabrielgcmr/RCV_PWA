interface Option {
    label: string;
    value: string;
  }
  

export interface TextInputProps {
  id?:string
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean
  value: string;
  onChange: ( value: string) => void;
  allowNumbers?: boolean;
}
export interface SelectInputProps {
  id?:string
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean
  value: string ;
  options: Option[];
  onChange: (name: string, value: string ) => void;
}

export type InputProps = TextInputProps | SelectInputProps ;