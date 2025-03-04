import React from "react";
import { InputProps } from "./types";

interface SelectInputProps extends InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  onChange,
  errorMessage,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value); // Passa o nome e o valor para a função onChange
  };

  return (
    <select
      {...rest}
      name={name}
      onChange={handleChange}
      className={mainInputLabel}
    >
      <option value="">Selecione</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      {errorMessage && (
        <span className={inp}>
          {errorMessage}
        </span>
      )}
    </select>
  );
};
