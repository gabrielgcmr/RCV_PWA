//component/startPage/1-IdentificationForm.tsx
import { usePatientStore } from "../../../store";
import SectionBase from "../../common/SectionBase";
import { Editor } from "@tiptap/react";
import { useIdentificationForm } from "@/hooks/useIdentificationChange";

// Importe a função de atualização do controller

const genderOptions = [
  { value: "Male", label: "Masculino" },
  { value: "Female", label: "Feminino" },
];

const raceOptions = [
  { label: "Branco", value: "white" },
  { label: "Preto", value: "black" },
  { label: "Outro", value: "other" },
];

interface IdentificationSectionProps {
  editor: Editor | null;
}

function IdentificationSection({ editor }: IdentificationSectionProps) {
  const { patient } = usePatientStore();
  const { handleIdentificationChange } = useIdentificationForm(editor);

  return (
    <SectionBase title="Identificação" icon="🏷️" id="identification">
      <form>
        <label htmlFor="name" className="block text-sm font-medium">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Digite o nome do paciente"
          value={patient.identification.fullName}
          onChange={(e) =>
            handleIdentificationChange("fullName", e.target.value)
          }
          className="w-60 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-1"
        />
        <label htmlFor="age" className="block text-sm font-medium">
          Idade
        </label>
        <input
          type="number"
          id="age"
          placeholder="Idade"
          value={patient.identification.age}
          onChange={(e) => handleIdentificationChange("age", e.target.value)}
          className="w-22 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-1"
        />
        <fieldset className="mb-1">
          <legend className="text-sm font-medium">Gênero</legend>
          <div className="flex gap-4 mt-1">
            {genderOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-1">
                <input
                  type="radio"
                  id={`gender-${option.value}`}
                  value={option.value}
                  checked={patient.identification.gender === option.value}
                  onChange={() =>
                    handleIdentificationChange("gender", option.value)
                  }
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
        <label htmlFor="race" className="block text-sm font-medium">
          Raça
        </label>
        <select
          id="race"
          name="race"
          value={patient.identification.race}
          onChange={(e) => handleIdentificationChange("race", e.target.value)}
          className="w-30 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200"
        >
          <option value="">Selecione</option>
          {raceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </SectionBase>
  );
}

export default IdentificationSection;
