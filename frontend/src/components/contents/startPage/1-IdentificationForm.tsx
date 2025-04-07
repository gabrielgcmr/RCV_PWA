import { usePatientStore } from "@/stores/usePatientStore";
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
  const { patient, setName, setAge, setGender, setRace } = usePatientStore();

  return (
    <SectionBase title="Identificação" icon="🏷️" id="identification">
      <form>
        <label htmlFor="name" className="block text-sm font-medium">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={patient.identification.name}
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setAge(e.target.value)}
          className="w-22 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-1"
        />
        <fieldset className="mb-1">
          <legend className="text-sm font-medium">Gênero</legend>
          <div className="flex gap-4 mt-1">
            {genderOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-1">
                <input
                  type="radio"
                  value={option.value}
                  checked={patient.identification.gender === option.value}
                  onChange={() => setGender(option.value as "Male" | "Female")}
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
          value={patient.identification.race}
          onChange={(e) => setRace(e.target.value)}
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
