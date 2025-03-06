import React from "react";
import { inputStyles } from "../inputStyles";
import { InputProps } from "./types";

interface CheckboxInputProps extends InputProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Agora passa apenas o estado
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  label,
  checked = false,
  onChange,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Passa true ou false
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Previne o comportamento padrão (scroll ao pressionar espaço)
  
      if (onChange) {
        // Criando um evento sintético para simular a mudança de estado
        const syntheticEvent = {
          ...e,
          target: { ...e.currentTarget, checked: !checked },
        } as React.ChangeEvent<HTMLInputElement>;
  
        onChange(syntheticEvent); // Passa o evento sintético
      }
    }
  };

  return (
    <label className={inputStyles.radioInputLabel}>
      <input
        {...rest}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={inputStyles.radioInput}
      />
      <span>{label}</span>
    </label>
  );
};
