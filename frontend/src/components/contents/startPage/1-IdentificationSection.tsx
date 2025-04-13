//component/startPage/1-IdentificationForm.tsx

import FormBase from "../../common/FormBase";

import { usePatientStore } from "@/store/patient";

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

function IdentificationForm() {
  const { identification, setIdentificationField } = usePatientStore();

  return (
    <FormBase
      title="Identificação"
      icon="🏷️"
      id="identification"
      className="max-w-80 overflow-y-auto"
    >
      <form>
        <label htmlFor="name" className="block text-sm font-medium">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Digite o nome do paciente"
          value={identification.fullName}
          onChange={(e) => setIdentificationField("fullName", e.target.value)}
          className="w-60 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-1"
        />
        <label htmlFor="age" className="block text-sm font-medium">
          Idade
        </label>
        <input
          type="number"
          id="age"
          placeholder="Idade"
          value={identification.age}
          onChange={(e) => setIdentificationField("age", e.target.value)}
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
                  checked={identification.gender === option.value}
                  onChange={() =>
                    setIdentificationField("gender", option.value)
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
          value={identification.race}
          onChange={(e) => setIdentificationField("race", e.target.value)}
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
    </FormBase>
  );
}

export default IdentificationForm;
