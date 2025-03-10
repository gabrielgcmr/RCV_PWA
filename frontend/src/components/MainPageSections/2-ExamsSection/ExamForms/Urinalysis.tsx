import { usePatient } from "../../../../hooks/usePatient";
import { ExamSelectInput } from "../../../common/ExamInput/ExamSelectInput";

export default function UrinalysisForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 flex-1 ">
      <h2 className="text-lg font-bold mb-4">EAS</h2>

      {/* Select com opções pré-definidas */}
      <ExamSelectInput
        name="urinalysis-result"
        abbreviation="EAS"
        label="EAS"
        value={getExamValue("urinalysis_result") || ""}
        options={[
          { label: "Normal", value: "Normal" },
          { label: "Alterado", value: "Alterado" },
        ]}
        onChange={handleExamChange}
      />
      
    </div>
  );
}
