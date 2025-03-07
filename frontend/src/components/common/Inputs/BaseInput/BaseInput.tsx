import React from "react";
import { inputStyles } from "../inputStyles";
import { BaseInputProps } from "./types";
import { usePatient } from "../../../../hooks/usePatient";

export const BaseInput = ({
  name,
  label,
  type,
  section,
  errorMessage,
  checked,
  ...rest
}: BaseInputProps & { checked?: boolean }) => {
  const { handleFieldChange, getFieldValue } = usePatient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === "checkbox" ? e.target.checked : e.target.value;
    if (section) {
      handleFieldChange(section, name, newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "checkbox" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      const newChecked = !e.currentTarget.checked;
      if (section) {
        handleFieldChange(section, name, newChecked);
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
            checked={checked !== undefined ? checked : Boolean(getFieldValue(section, name))}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
          <label htmlFor={name} className="text-white">
            {label}
          </label>
        </div>
      ) : (
        <div>
          {label && (
            <label htmlFor={name} className={inputStyles.mainInputLabel}>
              {label}
            </label>
          )}
          <input
            id={name}
            type={type}
            name={name}
            onChange={handleChange}
            className={getInputClassName()}
            value={getFieldValue(section, name)}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </div>
      )}

      {errorMessage && <span className={inputStyles.errorInput}>{errorMessage}</span>}
    </div>
  );
};
