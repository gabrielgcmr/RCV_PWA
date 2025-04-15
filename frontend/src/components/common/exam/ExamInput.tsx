import { Input } from "@/components/ui/input";

interface ExamInputProps {
  id: string;
  value: string | undefined; // Permitir undefined
  abbreviation?: string;
  onChange: (key: string, value: string) => void; // Adicione onChange
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
    <Input
      id={id}
      type="number"
      value={value}
      placeholder={placeholder ?? abbreviation} // Usar placeholder ou abbreviation
      onChange={(e) => onChange(id, e.target.value)}
      disabled={disabled}
      className="max-w-18"
    />
  );
}
