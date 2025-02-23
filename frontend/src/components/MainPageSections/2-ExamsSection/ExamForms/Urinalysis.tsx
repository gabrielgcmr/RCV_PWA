import { usePatient } from "../../../../hooks/usePatient";
import { SelectInput } from "../../../common/Inputs/SelectInput";

export default function UrinalysisForm() {
  const { handleExamChange, getExamValue } = usePatient();

  const handleChange = (name: string, value: string | number) => {
    handleExamChange(name, value, "EAS");
  };

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 flex-1">
      <h2 className="text-base text-center font-bold mb-2"> EAS</h2>

      {/* Resultado Geral */}
      <SelectInput
        name="urinalysis_result"
        label="EAS:"
        value={getExamValue("urinalysis_result") || ""}
        options={[
          { label: "Normal", value: "Normal" },
          { label: "Alterado", value: "Alterado" },
        ]}
        onChange={handleChange}
        className="mb-2"
      />
    </div>
  );
}
