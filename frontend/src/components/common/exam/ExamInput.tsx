import { Input } from "@/components/ui/input";

interface ExamInputProps {
  id: string;
  value: string | number | undefined; // Permitir undefined
  abbreviation?: string;
  onChange: (
    key: string,
    value: string | number,
    abbreviation?: string
  ) => void; // Adicione onChange
  placeholder?: string; // Adicione placeholder
  disabled?: boolean; // Adicione disabled
}

export function ExamInput({
  id,
  value,
  abbreviation,
  onChange,
  placeholder,
  disabled,
}: ExamInputProps) {
  return (
    <div className="space-y-0.5">
      <Input
        id={id}
        value={value === undefined ? "" : String(value)}
        placeholder={placeholder || abbreviation} // Usar placeholder ou abbreviation
        onChange={(e) => onChange(id, e.target.value, abbreviation)}
        disabled={disabled}
        className="max-w-15"
      />
    </div>
  );
}
