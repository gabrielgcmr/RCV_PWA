import React from "react";
import { InputProps } from "./types";
import { inputStyles } from "../inputStyles";

interface RadioInputProps extends InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  name,
  label,
  onChange,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label className={inputStyles.mainInputLabel}>
      <input
        {...rest}
        type="radio"
        name={name}
        onChange={handleChange}
        className={inputStyles.radioInput}
      />
      <span>{label}</span>
    </label>
  );
};
