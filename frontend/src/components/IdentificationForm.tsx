import { usePatient } from "../hooks/usePatient";

export default function IdentificationForm() {
  const { patientData, updatePatientData} = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-full text-white">
      <h2 className="text-lg font-bold mb-4">🏷️ Identificação</h2>

      {/* Nome */}
      <label className="block text-sm font-medium">Nome:
      <input
        type="text"
        value={patientData.identification.name}
        onChange={(e) => updatePatientData("identification", {name: e.target.value})}
        className="w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite o nome do paciente"
      />
      </label>

      {/* Idade */}
      <label className="block text-sm font-medium">Idade:
      <input
        type="number"
        value={patientData.identification.age}
        onChange={(e) => updatePatientData("identification", {age: e.target.value})}
        className="w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite a idade"
      />
      </label>

      {/* Gênero */}
      <label className="block text-sm font-medium">Gênero:</label>
      <div className="flex gap-4 mb-2  ">
        <label>
          <input
            type="radio"
            value="Masculino"
            checked={patientData.identification.gender === "Masculino"}
            onChange={(e) => updatePatientData("identification", {gender: e.target.value})}
          />
          Masculino
        </label>
        <label>
          <input
            type="radio"
            value="Feminino"
            checked={patientData.identification.gender === "Feminino"}
            onChange={(e) => updatePatientData("identification", {gender: e.target.value})}
          />
          Feminino
        </label>
      </div>

      {/* Raça */}
      <label className="block text-sm font-medium ">Raça:
      <select
        value={patientData.identification.race}
        onChange={(e) => updatePatientData("identification", {race: e.target.value})}
        className="w-full p-2 border rounded bg-zinc-800"
      >
        <option value="">Selecione...</option>
        <option value="Branco">Branco</option>
        <option value="Preto">Preto</option>
        <option value="Outro">Outro</option>
      </select>
      </label>
    </div>
  );
}
