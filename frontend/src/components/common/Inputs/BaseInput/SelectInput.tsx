import React from "react";
import { inputStyles } from "../inputStyles";
import { BaseSelectInputProps } from "./types";
import { usePatient } from "../../../../hooks/usePatient";

export const BaseSelectInput: React.FC<BaseSelectInputProps> = ({
  name,
  label,
  options,
  errorMessage,
  section,
  ...rest
}) => {
  const { handleFieldChange, getFieldValue } = usePatient();

  // Obtém o valor atual do campo correspondente
  const selectedValue = section ? getFieldValue(section, name) : "";

  // Função para lidar com mudanças no select
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (section) {
      handleFieldChange(section, name, e.target.value);
    }
  };

  return (
    <div className="mb-2">
      {label && (
        <label htmlFor={name} className={inputStyles.mainInputLabel}>
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={selectedValue}
        onChange={handleChange}
        className={inputStyles.textInput}
        {...rest}
      >
        <option value="">Selecione</option>
        {options?.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {errorMessage && <p className={inputStyles.errorInput}>{errorMessage}</p>}
    </div>
  );
};
