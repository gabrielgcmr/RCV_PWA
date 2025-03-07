import React from "react";
import { inputStyles } from "../inputStyles";
import { BaseInputProps } from "./types";
import { useInputHandlers } from "./useInputHandlers";


export const BaseInput = ({
  name,
  label,
  type,
  formSection: section,
  errorMessage,
  checked,
  ...rest
}: BaseInputProps & { checked?: boolean }) => {
  const { handleChange, handleKeyDown, getFieldValue } = useInputHandlers(section, name, type);

  const inputClassName = classNames({
    [inputStyles.checkboxInput]: type === "checkbox",
    [inputStyles.radioInput]: type === "radio",
    [inputStyles.numberInput]: type === "number",
    [inputStyles.textInput]: type === "text",
  });

  const isCheckboxOrRadio = type === "checkbox" || type === "radio";

  return (
    <div className="mb-1">
      {isCheckboxOrRadio ? (
        <div className={inputStyles.radioInputLabel}>
          <input
            id={name}
            type={type}
            name={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={inputClassName}
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
            className={inputClassName}
            value={getFieldValue(section, name)}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </div>
      )}

      {errorMessage && <span className={inputStyles.errorInput}>{errorMessage}</span>}
    </div>
  );
};