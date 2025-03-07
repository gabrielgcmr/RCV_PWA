import React from "react";
import { ExamInputProps } from "./types";
import { usePatient } from "../../../../hooks/usePatient";
import { inputStyles } from "../inputStyles";

export const ExamInput: React.FC<ExamInputProps> = ({
  name,
  label,
  abbreviation,
  type,
  section,
  errorMessage,
  checked,
  ...rest
}) => {
  const { handleExamChange, getFieldValue } = usePatient();

  // Obtém o valor do campo dentro de "complementaryExams"
  const value = section ? getFieldValue(section, name) : "";

  // 🔹 Função de mudança do input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === "checkbox" ? e.target.checked : e.target.value;
    handleExamChange(name, newValue, abbreviation);
  };

  // 🔹 Atalho para checkboxes e radio buttons com "Enter" e "Espaço"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "checkbox" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleExamChange(name, !!value, abbreviation);
    }
  };

  // 🔹 Determina a classe CSS do input
  const getInputClassName = () => {
    return {
      checkbox: inputStyles.checkboxInput,
      radio: inputStyles.radioInput,
      number: inputStyles.numberInput,
      text: inputStyles.textInput,
    }[type] || inputStyles.textInput;
  };

  return (
    <div className="mb-1">
      <label htmlFor={name} className={inputStyles.mainInputLabel}>
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        placeholder={abbreviation}
        onChange={handleChange}
        onKeyDown={type === "checkbox" ? handleKeyDown : undefined}
        className={getInputClassName()}
        checked={checked !== undefined ? checked : Boolean(value)}
        value={type !== "checkbox" ? value || "" : undefined}
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />

      {errorMessage && <span className={inputStyles.errorInput}>{errorMessage}</span>}
    </div>
  );
};
