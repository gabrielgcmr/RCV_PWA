import React from "react";
import { RadioInputProps } from "./types";

export const RadioInput: React.FC<RadioInputProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  className = "",
  inputClassName = "",
}) => {
  const handleChange = () => {
    onChange(name, value); // Passa o nome e o valor para a função onChange
  };

  return (
    <label className={`flex items-center space-x-2 ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className={`form-radio text-blue-500 focus:ring-blue-200 ${inputClassName}`}
      />
      <span>{label}</span>
    </label>
  );
};