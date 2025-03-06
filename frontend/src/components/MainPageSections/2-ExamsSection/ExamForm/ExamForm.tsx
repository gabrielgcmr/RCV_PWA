
import { usePatient } from "../../../../hooks/usePatient";
import { GenericInput } from "../../../common/Inputs/GenericInput";
import { GenericInputProps } from "../../../common/Inputs/types";

export interface ExamFormProps {
  title?: string;
  inputs: GenericInputProps[];
}

export default function ExamProfileForm({ title = "Exame", inputs }: ExamFormProps) {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-2 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 min-w-[100px] max-w-[200px]">
      <h2 className="text-pretty font-medium mb-1">{title}</h2>

      {/* Renderização dinâmica dos inputs de exames */}
      {inputs.map(({ name, abbreviation, ...rest }) => (
        <GenericInput
          key={name}
          name={name}
          {...rest}
          value={getExamValue(name) || ""}
          onChange={(e: { target: { name: string; value: string | number }; }) => handleExamChange(e.target.name, e.target.value, abbreviation)}
        />
      ))}
    </div>
  );
}
