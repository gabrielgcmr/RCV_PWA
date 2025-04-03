type CheckboxGroupProps = {
  options: { value: string; label: string }[];
  isChecked: (value: string) => boolean;
  onChange: (value: string, checked: boolean) => void;
  className?: string;
};

export default function CheckboxGroup({
  options,
  isChecked,
  onChange,
  className = "",
}: CheckboxGroupProps) {
  return (
    <div className={`space-y-0.5 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-0.5">
          <input
            type="checkbox"
            checked={isChecked(option.value)}
            onChange={(e) => onChange(option.value, e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
