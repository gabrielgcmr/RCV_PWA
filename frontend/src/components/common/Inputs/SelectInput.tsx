import React from "react";
import { SelectInputProps } from "./types";

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  disabled = false,
  options,
  onChange,
  className = "",
  inputClassName = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value); // Passa o nome e o valor para a função onChange
  };

  return (
    <select
      id={name}
      value={value}
      disabled={disabled}
      onChange={handleChange}
      className={`w-full p-2 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 ${inputClassName} ${className}`}
    >
      <option value="">Selecione</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};