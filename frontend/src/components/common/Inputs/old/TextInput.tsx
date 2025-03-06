import React from "react";
import { InputProps } from "./types";
import { inputStyles } from "../inputStyles";

interface TextInputProps extends InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  onChange,
  errorMessage,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Remove números
    e.target.value = value;
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      {label && (
        <label htmlFor={name} className={inputStyles.mainInputLabel}>
          {label}
        </label>
      )}
      <input
        {...rest}
        name={name}
        type="text"
        onChange={handleChange}
        className={inputStyles.textInput}
      />
      {errorMessage && (
        <span className={inputStyles.errorInput}>{errorMessage}</span>
      )}
    </div>
  );
};
