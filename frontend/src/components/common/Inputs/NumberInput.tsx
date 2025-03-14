import React from "react";
import { NumberInputProps} from "./types";

const NumberInput: React.FC<NumberInputProps> = ({
  name,
  label,
  placeholder = "",
  value,
  disabled = false,
  onChange,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Substituir vírgula por ponto antes da conversão
    inputValue = inputValue.replace(",", ".");

    // Converter para número, se válido
    const numericValue = inputValue === "" ? NaN : Number(inputValue);

    if (inputValue === "") {
        // Handle the empty string case if needed
        onChange(name, 0); // or any other default value you prefer
    } else if (!isNaN(numericValue)) {
        onChange(name, numericValue);
    }
};

return (
    <div className={className}>
        {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
        </label>
        )}
        <input
        id={name}
        type="number"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={`w-30 p-2 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200`}
        />
    </div>
);
};

export default NumberInput