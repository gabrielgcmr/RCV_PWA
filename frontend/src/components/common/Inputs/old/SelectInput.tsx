import React from "react";
import { InputProps } from "./types";
import { inputStyles } from "../inputStyles";

interface SelectInputProps extends InputProps {
  options: { label: string; value: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Corrigido o tipo do evento
}

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  onChange,
  options,
  errorMessage,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e); // Passa o evento completo
    }
  };

  return (
    <div>
      <select
        {...rest}
        name={name}
        onChange={handleChange}
        className={inputStyles.textInput}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <span className={inputStyles.errorInput}>{errorMessage}</span>
      )}
    </div>
  );
};