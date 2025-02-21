import { usePatient } from "../../../../hooks/usePatient";

export default function UrinalysisForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-4">Urinalysis (EAS)</h2>

      {/* Resultado geral do exame de urina */}
      <label htmlFor="urinalysis-result" className="block text-base font-medium mb-2">
        Resultado:
      </label>

      <select
        id="urinalysis-result"
        value={getExamValue("Urinalysis_Result") || ""}
        onChange={(e) =>
          handleExamChange("Urinalysis_Result",e.target.value)
        }
        className="w-full p-2 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecione</option>
        <option value="Normal">Normal</option>
        <option value="Alterado">Alterado</option>
      </select>
    </div>
  );
}

