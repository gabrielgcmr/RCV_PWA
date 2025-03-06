import React from "react";
import { inputStyles } from "./inputStyles";
import { ExamInputProps } from "./types";
import { usePatient } from "../../../../hooks/usePatient";

// Esse componente é igual ao BaseInput, com a adição da propriedade "abbreviation"
// que é exibida no label e passada para a lógica de alteração.
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
  const { handleExamChange, getInputFieldValue } = usePatient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === "checkbox" ? e.target.checked : e.target.value;
    if (section) {
      // Aqui chamamos a função específica para exames, passando também a abreviação.
      handleExamChange(name, newValue, abbreviation);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "checkbox" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      const newChecked = !e.currentTarget.checked;
      if (section) {
        handleExamChange(name, newChecked, abbreviation);
      }
    }
  };

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

  const value = section ? getInputFieldValue(section, name) : "";

  return (
    <div className="mb-1">
      {type === "checkbox" || type === "radio" ? (
        <div className={inputStyles.radioInputLabel}>
          <input
            id={name}
            type={type}
            name={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={getInputClassName()}
            checked={checked !== undefined ? checked : Boolean(value)}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
          <label htmlFor={name} className="text-white">
            {label} {`(${abbreviation})`}
          </label>
        </div>
      ) : (
        <div>
          {label && (
            <label htmlFor={name} className={inputStyles.mainInputLabel}>
              {label} {`(${abbreviation})`}
            </label>
          )}
          <input
            id={name}
            type={type}
            name={name}
            onChange={handleChange}
            className={getInputClassName()}
            value={value || ""}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </div>
      )}

      {errorMessage && <span className={inputStyles.errorInput}>{errorMessage}</span>}
    </div>
  );
};
