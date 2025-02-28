import { usePatient } from "../../../../hooks/usePatient";
import { ExamSelectInput } from "../../../common/ExamInput/ExamSelectInput";

export default function CBCForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 flex-1">
      <h2 className="text-lg font-bold mb-4">Hemograma</h2>

      <ExamSelectInput
        name="CBC"
        label="Hemograma :"
        abbreviation="HMG"
        value={getExamValue("CBC") || ""}
        options={[
          { label: "Normal", value: "Normal" },
          { label: "Alterado", value: "Alterado" },
        ]}
        onChange={handleExamChange}
      />
    </div>
  );
}
