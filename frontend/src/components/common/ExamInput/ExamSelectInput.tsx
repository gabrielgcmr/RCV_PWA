import { IExamInputProps } from "./IExamInputProps";

interface ExamSelectInputProps extends  IExamInputProps {
    options: { label: string; value: string }[];
}

const baseInputClasses = "w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200";

export function ExamSelectInput({
  name,
  abbreviation,
  value,
  label,
  disabled = false,
  onChange,
  options,
}: ExamSelectInputProps) {
  return (
    <label className="block text-sm font-medium mb-1" htmlFor={name}>
      {label}
      <select
        id={name}
        value={value}
        aria-label={label}
        disabled={disabled}
        onChange={(e) => onChange?.(name, e.target.value,abbreviation)}
        className={`${baseInputClasses} ${disabled ? "opacity-50" : ""}`}
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