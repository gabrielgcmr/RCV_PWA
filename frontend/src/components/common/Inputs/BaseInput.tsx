import React from "react";
import { inputStyles } from "./inputStyles";
import { BaseInputProps } from "./types";
import { useInputHandler } from "../../../hooks/useInputHandler";
import { PatientData } from "../../../interfaces/Interfaces";

// 🔥 Adicionamos <S extends keyof PatientData> para indicar que o componente recebe um tipo genérico
export const BaseInput = <S extends keyof PatientData>({
  name,
  type,
  label,
  errorMessage,
  onKeyDown,
  section,
  ...rest
}: BaseInputProps<S>) => {
  // 🔥 Agora, usamos `useInputHandler` corretamente
  const { fieldValue, handleInputChange } = useInputHandler(section, name);

  // Função para obter a classe CSS com base no tipo de input
  const getInputClassName = () => {
    switch (type) {
      case "checkbox":
        return inputStyles.checkboxInput;
      case "radio":
        return inputStyles.radioInput;
      case "number":
        return inputStyles.numberInput;
      default:
        return inputStyles.textInput;
    }
  };

  // Função para onKeyDown de <input>
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "checkbox" && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      const syntheticEvent = {
        ...event,
        target: { ...event.currentTarget, checked: !event.currentTarget.checked },
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(syntheticEvent);
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={fieldValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        className={getInputClassName()}
        {...rest}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};


   

