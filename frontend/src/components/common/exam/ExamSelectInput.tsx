import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

interface ExamSelectInputProps {
  id: string;
  value: string;
  options: { label: string; value: string }[]; // Use a estrutura de options correta
  abbreviation?: string;
  onChange: (key: string, value: string, abbreviation?: string) => void; // Adicione onChange
  disabled?: boolean; // Adicione disabled
}

export function ExamSelectInput({
  id,
  value,
  options,
  abbreviation,
  onChange,
  disabled,
}: ExamSelectInputProps) {
  return (
    <>
      <Label htmlFor={id}>{abbreviation}</Label>
      <Select
        onValueChange={(newValue) => onChange(id, newValue)}
        value={value === "" ? undefined : value}
        disabled={disabled}
      >
        <SelectTrigger id={id} className="w-full text-sm">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          {options
            .filter((option) => option.value !== "")
            .map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
}
