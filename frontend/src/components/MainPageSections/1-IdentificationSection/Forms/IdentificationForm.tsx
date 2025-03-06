import { usePatient } from "../../../../hooks/usePatient";
import { GenericInput } from "../../../common/Inputs/GenericInput";

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
      <h2 className="text-lg font-bold mb-2">🏷️ Identificação</h2>

      {/* Nome */}
      <GenericInput
        name="name"
        type = "text"
        label="Nome"
        onChange={handleInputChange}
        placeholder="Nome do paciente"
      />

      {/* Idade */}
      <GenericInput
        name="age"
        type = "number"
        label="Idade"
        onChange={handleInputChange}
        placeholder="Idade"
      />

      {/* Gênero */}
      <div className="flex gap-4 mb-2">
        <GenericInput
          name="gender"
          value="male"
          type = "radio"
          label="Masculino"
          checked={identification.gender === "male"}
          onChange={handleInputChange}
        />
        <GenericInput
          name="gender"
          value="female"
          type = "radio"
          label="Feminino"
          checked={identification.gender === "female"}
          onChange={handleInputChange}
        />
      </div>

      {/* Raça */}
      <GenericInput
        name="race"
        label = "Raça"
        type = "select"
        value={identification.race || ""}
        onChange={handleInputChange}
        options={[
          { option: "Branco", value: "white" },
          { option: "Preto", value: "black" },
          { option: "Outro", value: "other" },
        ]}
      />
    </div>
  );
}
