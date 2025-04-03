import React from "react";
import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";
import RadioGroup from "../../common/input/RadioGroup";
import SelectInput from "../../common/input/SelectInput";
import TextInput from "../../common/input/TextInput";

// Constantes movidas para fora do componente
const GENDER_OPTIONS = [
  { value: "Male", label: "Masculino" },
  { value: "Female", label: "Feminino" },
] as const;

const RACE_OPTIONS = [
  { label: "Branco", value: "white" },
  { label: "Preto", value: "black" },
  { label: "Outro", value: "other" },
] as const;

const IdentificationForm: React.FC = () => {
  const { patient, updateField } = usePatient();
  const { identification } = patient;

  // Handler genérico para atualização de campos
  const handleFieldChange = <T extends keyof typeof identification>(
    field: T,
    value: (typeof identification)[T]
  ) => {
    updateField("identification", field, value);
  };

  return (
    <SectionBase title="Identificação" icon="🏷️">
      <TextInput
        label="Nome"
        value={identification.name}
        onChange={(value) => handleFieldChange("name", value)}
        placeholder="Digite o nome do paciente"
        required
      />

      <TextInput
        label="Idade"
        value={identification.age}
        onChange={(value) => handleFieldChange("age", value)}
        placeholder="Digite a idade"
        type="number"
        min={0}
        max={120}
      />

      <RadioGroup
        label="Gênero"
        options={GENDER_OPTIONS}
        selectedValue={identification.gender}
        onChange={(value) => handleFieldChange("gender", value)}
      />

      <SelectInput
        label="Raça"
        value={identification.race}
        onChange={(value) => handleFieldChange("race", value)}
        options={RACE_OPTIONS}
      />
    </SectionBase>
  );
};

export default React.memo(IdentificationForm);
