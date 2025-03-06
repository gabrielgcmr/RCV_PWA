import React from "react";
import { inputStyles } from "./inputStyles";
import { GenericInputProps } from "./types";

export const GenericInput = ({
  name,
  label,
  type,
  onChange,
  errorMessage,
  checked,
  ...rest
}: GenericInputProps & { checked?: boolean }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "checkbox" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      const syntheticEvent = {
        ...e,
        target: { ...e.currentTarget, checked: !e.currentTarget.checked },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
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
        <div className={inputStyles.radioInputLabel}> {/* Alinha label ao lado do input */}
          <input
            id={name}
            type={type}
            name={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={getInputClassName()}
            checked={checked}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
          <label htmlFor={name} className="text-white">
            {label}
          </label>
        </div>
      ) : type === "select" ? (
        <div>
          <label htmlFor={name} className={inputStyles.mainInputLabel}>
            {label}
          </label>
          <select
            id={name}
            name={name}
            onChange={handleChange}
            className={inputStyles.textInput}
            {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="">Selecione</option>
            {"options" in rest &&
              rest.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.option}
                </option>
              ))}
          </select>
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
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </div>
      )}

      {errorMessage && <span className={inputStyles.errorInput}>{errorMessage}</span>}
    </div>
  );
};