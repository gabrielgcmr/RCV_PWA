interface ProblemOptionProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function ProblemOption({
  name,
  label,
  checked,
  onChange,
  onKeyDown,
}: ProblemOptionProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onKeyDown={onKeyDown}
        className="mr-2 accent-blue-500 focus:ring-blue-200"
      />
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
    </div>
  );
}
