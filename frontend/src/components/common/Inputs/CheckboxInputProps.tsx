import React from "react";
import { CheckboxInputProps } from "./types";

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  className = "",
  inputClassName = "",
}) => {
  const handleChange = () => {
    onChange(name, checked ? "" : value); // Alterna entre selecionado e não selecionado
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Previne o comportamento padrão (rolagem da página no caso do Space)
      onChange(name, !checked ? value : ""); // Inverte o estado do checkbox
    }
  };

  return (
    <label className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`form-checkbox text-blue-500 focus:ring-blue-200 ${inputClassName}`}
      />
      <span>{label}</span>
    </label>
  );
};