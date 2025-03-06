import React from "react";
import { inputStyles } from "./inputStyles";
import { BaseSelectInputProps } from "./types";
import { usePatient } from "../../../../hooks/usePatient";

export const BaseSelectInput: React.FC<BaseSelectInputProps> = ({
  name,
  label,
  options,
  errorMessage,
  onChange,
  section,
  ...rest
}) => {
  const {handleFieldChange, getInputFieldValue} = usePatient();
   // Obtém o valor atual do campo correspondente
   const selectedValue = section ? getInputFieldValue(section, name) : "";

   return (
    <div className="mb-2">
      <label htmlFor={name} className={inputStyles.mainInputLabel}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={selectedValue}
        onChange={(e) => section && handleFieldChange(section, name, e.target.value)}
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
