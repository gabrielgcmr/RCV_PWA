import React from "react";
import { CheckboxInputProps } from "./types";

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
}) => {
  // Função para capturar pressionamento de tecla
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Previne rolagem ao pressionar "Espaço"
      onChange(name, !checked); // Alterna o estado do checkbox
    }
  };

  return (
    <label className="flex items-center space-x-2 mb-2">
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={checked}
        onChange={(e) => onChange(name, e.target.checked)} // Agora recebe boolean diretamente
        onKeyDown={handleKeyDown}
        className="form-checkbox text-blue-500 focus:ring-blue-200"
      />
      <span>{label}</span>
    </label>
  );
};
