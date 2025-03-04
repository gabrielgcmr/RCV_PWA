import React from "react";
import { InputProps } from "./types";
import { inputStyles } from "./inputStyles";
interface NumberInputProps extends InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  name,
  label,
  onChange,
  errorMessage,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Substituir vírgula por ponto antes da conversão
    value = value.replace(",", ".");

    // Converter para número, se válido
    const numericValue = value === "" ? NaN : Number(value);

    if (value === "") {
        // Handle the empty string case if needed
        if(onChange){
            onChange(e); 
        }
        // or any other default value you prefer
    } else if (!isNaN(numericValue)) {
        if(onChange){
            onChange(e); 
        }
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
        name = {name}
        type="number"
        onChange={handleChange}
        className={inputStyles.numberInput}
        />
        {errorMessage && (
            <span className={inputStyles.errorInput}>
                {errorMessage}
            </span>
        )}
    </div>
);
};
