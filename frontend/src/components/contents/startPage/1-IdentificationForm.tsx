import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";

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
    <SectionBase title="Identificação" icon="🏷️">
      <form>
        <label htmlFor="name" className="block text-sm font-medium">
          {" "}
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Digite o nome do paciente"
          value={patient.identification.name}
          onChange={(e) =>
            updateField("identification", "name", e.target.value)
          }
          className="w-60 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-1"
        />
        <label htmlFor="age" className="block text-sm font-medium">
          {" "}
          Idade
        </label>
        <input
          type="number"
          id="age"
          placeholder="Idade"
          value={patient.identification.age}
          onChange={(e) => updateField("identification", "age", e.target.value)}
          className="w-22 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-1"
        />

        <fieldset className="mb-1">
          <legend className="text-sm font-medium">Gênero</legend>
          <div className="flex gap-4 mt-1">
            {genderOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-1">
                <input
                  type="radio"
                  id="gender"
                  value={option.value}
                  checked={patient.identification.gender === option.value}
                  onChange={() =>
                    updateField("identification", "gender", option.value)
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
          onChange={(e) =>
            updateField("identification", "race", e.target.value)
          }
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

export default IdentificationForm;
