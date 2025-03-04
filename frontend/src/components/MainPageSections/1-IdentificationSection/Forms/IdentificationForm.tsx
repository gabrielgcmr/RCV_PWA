import { usePatient } from "../../../../hooks/usePatient";
import { RadioInput } from "../../../common/Inputs/RadioInput";
import { TextInput } from "../../../common/Inputs/TextInput";
import { NumberInput } from "../../../common/Inputs/NumberInput";
import { SelectInput } from "../../../common/Inputs/SelectInput";

export default function IdentificationForm() {
  const { patientData, updatePatientData } = usePatient();
  const { identification } = patientData;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    updatePatientData("identification", { ...identification, [name]: value });
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-4">🏷️ Identificação</h2>

      {/* Nome */}
      <TextInput
        name="name"
        label="Nome"
        value={identification.name || ""}
        onChange={handleInputChange}
        placeholder="Nome do paciente"
      />

      {/* Idade */}
      <NumberInput
        name="age"
        label="Idade"
        value={identification.age || ""}
        onChange={handleInputChange}
        placeholder="Idade"
      />

      {/* Gênero */}
      <div className="flex gap-4 mb-2">
        <RadioInput
          name="gender"
          value="Male"
          label="Masculino"
          checked={identification.gender === "Male"}
          onChange={handleInputChange}
        />
        <RadioInput
          name="gender"
          value="Female"
          label="Feminino"
          checked={identification.gender === "Female"}
          onChange={handleInputChange}
        />
      </div>

      {/* Raça */}
      <SelectInput
        name="race"
        value={identification.race || ""}
        onChange={handleInputChange}
        options={[
          { label: "Branco", value: "white" },
          { label: "Preto", value: "black" },
          { label: "Outro", value: "other" },
        ]}
      />
    </div>
  );
}
