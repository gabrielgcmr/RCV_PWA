// ExamInput.tsx
import React from "react";
import { examDictionary } from "../../common/constants/examDictionary";
import { usePatient } from "../../../hooks/usePatient";
import { SelectInput } from "../../common/Inputs/SelectInput";
import { GenericInput } from "../../common/Inputs/GenericInput";


interface ExamInputProps {
  examKey: string;
  // Você pode adicionar props extras caso necessário
}

export const ExamInput: React.FC<ExamInputProps> = ({ examKey }) => {
  const examMeta = examDictionary[examKey];
  const { handleExamChange, getExamValue } = usePatient();

  if (!examMeta) return null; // ou renderizar algo que indique erro

  const commonProps = {
    name: examKey,
    label: examMeta.label,
    abbreviation: examMeta.abbreviation,
    placeholder: examMeta.abbreviation,
    value: getExamValue(examKey) || "",
  };

  // A lógica de onChange é encapsulada aqui:
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
    handleExamChange(examKey, e.target.value, examMeta.abbreviation);

  // Renderiza select se o tipo for "select", senão renderiza GenericInput
  if (examMeta.type === "select") {
    return (
      <SelectInput
        {...commonProps}
        type="select"
        options={examMeta.options!}
        onChange={onChangeHandler as React.ChangeEventHandler<HTMLSelectElement>}
      />
    );
  }

  return (
    <GenericInput
      {...commonProps}
      type={examMeta.type}
      onChange={onChangeHandler as React.ChangeEventHandler<HTMLInputElement>}
    />
  );
};
