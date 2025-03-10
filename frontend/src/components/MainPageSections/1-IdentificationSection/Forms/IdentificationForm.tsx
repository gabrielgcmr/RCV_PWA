import { usePatient } from "../../../../hooks/usePatient";
import { RadioInput } from "../../../common/Inputs/RadioInput";
import { TextInput } from "../../../common/Inputs/TextInput";
import { NumberInput } from "../../../common/Inputs/NumberInput";
import { SelectInput } from "../../../common/Inputs/SelectInput";

export default function IdentificationForm() {
  const { patientData, updatePatientData } = usePatient();

  const handleChange = (field: string, value: string | number) => {
    updatePatientData("identification", { ...patientData.identification, [field]: value });
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-2">
      <h2 className="text-lg font-bold mb-4">🏷️ Identificação</h2>

      {/* Nome */}
      <TextInput
        name="name"
        label="Nome"
        value={patientData.identification.name || ""}
        onChange={handleChange}
        placeholder="Digite o nome do paciente"
        className="mb-2"
      />

      {/* Idade */}
      <NumberInput
        name="age"
        label="Idade"
        value={patientData.identification.age || ""}
        onChange={handleChange}
        placeholder="Digite a idade"
        className="mb-2"
      />

      {/* Gênero */}
      <div className="flex gap-4 mb-2">
        <RadioInput
          name="gender"
          value="Male"
          label="Masculino"
          checked={patientData.identification.gender === "Male"}
          onChange={handleChange}
          className="mb-2"
        />
        <RadioInput
          name="gender"
          value="Female"
          label="Feminino"
          checked={patientData.identification.gender === "Female"}
          onChange={handleChange}
          className="mb-2"
        />
      </div>

      {/* Raça */}
      <SelectInput
        name="race"
        value={patientData.identification.race || ""}
        onChange={handleChange}
        options={[
          { label: "Branco", value: "white" },
          { label: "Preto", value: "black" },
          { label: "Outro", value: "other" },
        ]}
        className="mb-2"
      />
    </div>
  );
}
