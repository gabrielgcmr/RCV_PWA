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
    <div className="mb-4">
    <label className="block font-medium mb-1" htmlFor={name}>
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
      className={`w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-800 ${
        errorMessage ? "border-red-500" : "border-gray-300"
      }`}
    />
    {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
}
  