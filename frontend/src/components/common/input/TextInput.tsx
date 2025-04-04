import React from "react";
import { TextInputProps } from "./types";

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder = "",
  value,
  disabled = false,
  onChange,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bloquear números no input de texto
    const inputValue = e.target.value.replace(/[0-9]/g, "");
    onChange(name, inputValue);
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
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={`w-full p-2 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200`}
      />
    </div>
  );
};

export default TextInput