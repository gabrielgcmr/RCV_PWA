import { IExamInputProps } from "./IExamInputProps";

interface ExamSelectInputProps extends IExamInputProps {
  options: { label: string; value: string }[];
  errorMessage?: string;
}

const baseInputClasses =
  "w-28 p-1 text-sm border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200";

export function ExamSelectInput({
  name,
  abbreviation,
  value,
  label,
  disabled = false,
  errorMessage,
  onChange,
  options,
}: ExamSelectInputProps) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        value={value}
        aria-label={label}
        disabled={disabled}
        onChange={(e) => onChange?.(name, e.target.value, abbreviation)}
        className={`${baseInputClasses} ${disabled ? "opacity-50" : ""} ${
          errorMessage ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
}
