import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <div className="space-y-2">
      <Label htmlFor={id}></Label>
      <Input
        id={id}
        value={value === undefined ? "" : String(value)} // Converter para string
        placeholder={placeholder || abbreviation} // Usar placeholder ou abbreviation
        onChange={(e) => onChange(id, e.target.value, abbreviation)}
        disabled={disabled}
      />
    </div>
  );
}
