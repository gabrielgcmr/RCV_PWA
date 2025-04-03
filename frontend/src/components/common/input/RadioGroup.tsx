type RadioGroupProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function RadioGroup({
  label,
  name,
  options,
  selectedValue,
  onChange,
  className = "",
}: RadioGroupProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
