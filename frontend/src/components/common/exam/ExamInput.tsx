// components/common/exam/ExamInput.tsx
import { ExamDefinition } from "../../../constants/examDictionary";
import NumberInput from "../input/NumberInput";
import SelectInput from "../input/SelectInput";
import TextInput from "../input/TextInput";

type ExamInputProps = {
  examKey: string;
  definition: ExamDefinition;
  value: string | number | null;
  onChange: (name: string, value: string | number) => void;
};

export default function ExamInput({
  examKey,
  definition,
  value,
  onChange,
}: ExamInputProps) {
  const commonProps = {
    name: examKey,
    label: `${definition.label} (${definition.abbreviation})`,
    value: value ?? "",
    onChange: (value: string | number | null) => {
      if (value !== null) onChange(examKey, value);
    },
    className: "mb-2",
  };

  switch (definition.inputType) {
    case "select":
      return (
        <SelectInput {...commonProps} options={definition.options || []} />
      );
    case "input":
    default:
      // Verifica se o valor é numérico (para decidir entre NumberInput e TextInput)
      const isNumeric =
        typeof value === "number" ||
        (typeof value === "string" && !isNaN(parseFloat(value)));

      return isNumeric ? (
        <NumberInput {...commonProps} />
      ) : (
        <TextInput {...commonProps} />
      );
  }
}
