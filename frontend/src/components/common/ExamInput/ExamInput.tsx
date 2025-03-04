import { IExamInputProps } from "./IExamInputProps";

export function ExamInput({ 
  name, 
  abbreviation,
  value,
  label,
  placeholder,
  disabled = false,
  errorMessage,
  onChange,
  }: IExamInputProps) {
  return (
    <div className="mb-2">
    <label className="block text-sm" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      type="number"
      placeholder={placeholder}
      value={value}
      aria-label={label}
      disabled={disabled}
      onChange={(e) => onChange?.(name, e.target.value,abbreviation)}
      className={`w-28 p-1 text-sm border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200 ${
        errorMessage ? "border-red-500" : "border-gray-300"
      }`}
    />
    {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
}
  