import { ExamSelectInputProps } from "./types";

const baseInputClasses = "block p-1 border rounded mb-1 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200";

export function ExamSelectInput({
  name,
  abbreviation,
  value = "",
  label,
  disabled = false,
  onChange,
  options = [],
}: ExamSelectInputProps) {
  return (
    <label className="block text-sm" htmlFor={name}>
      {label}
      <select
        id={name}
        value={value}
        aria-label={label}
        disabled={disabled}
        onChange={(e) => onChange?.(name, e.target.value,abbreviation)}
        className={`${baseInputClasses} ${disabled ? "opacity-10" : ""}`}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}