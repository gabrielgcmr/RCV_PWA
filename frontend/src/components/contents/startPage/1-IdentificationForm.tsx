import usePatient from "../../../hooks/usePatient";
import FormBase from "../../common/form/FormBase";
import NumberInput from "../../common/input/NumberInput";
import RadioGroup from "../../common/input/RadioGroup";
import SelectInput from "../../common/input/SelectInput";
import TextInput from "../../common/input/TextInput";

const genderOptions = [
  { value: "Male", label: "Masculino" },
  { value: "Female", label: "Feminino" },
];

const raceOptions = [
  { label: "Branco", value: "white" },
  { label: "Preto", value: "black" },
  { label: "Outro", value: "other" },
];

function IdentificationForm() {
  const { patient, updateField } = usePatient();

  return (
    <FormBase title="Identificação" icon="🏷️">
      <TextInput
        name="name"
        label="Nome"
        value={patient.identification.name}
        onChange={(value) => updateField("identification", "name", value)}
        placeholder="Digite o nome do paciente"
      />

      <NumberInput
        name="age"
        label="Idade"
        value={patient.identification.age}
        onChange={(value) => updateField("identification", "age", value)}
        placeholder="Digite a idade"
      />

      <RadioGroup
        label="Gênero"
        name="gender"
        options={genderOptions}
        selectedValue={patient.identification.gender}
        onChange={(value) => updateField("identification", "gender", value)}
      />

      <SelectInput
        name="race"
        value={patient.identification.race}
        onChange={(value) => updateField("identification", "race", value)}
        options={raceOptions}
      />
    </FormBase>
  );
}

export default IdentificationForm;
