interface Option {
    label: string;
    value: string;
  }
  
interface BaseInputProps {
  id?:string
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean
}

export interface TextInputProps extends BaseInputProps {
  value: string;
  onChange: (name: string, value: string) => void;
  allowNumbers?: boolean;
}

export interface NumberInputProps extends BaseInputProps {
  value: string | number ;
  onChange: (name: string, value: string | number ) => void;
}


export interface SelectInputProps extends BaseInputProps {
  value: string ;
  options: Option[];
  onChange: (name: string, value: string ) => void;
}

export type InputProps = TextInputProps | SelectInputProps ;