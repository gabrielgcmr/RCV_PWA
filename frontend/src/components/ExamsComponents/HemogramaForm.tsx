import { usePatient } from "../../hooks/usePatient";
import { ExamInput } from "./ExamInput";

export default function HemogramForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-1/4 text-white">
      <h2 className="text-lg font-bold mb-4">Excretas Renais</h2>

      <ExamInput
        examName="CBC"
        label="Hemograma :"
        placeholder="Hemograma"
        value={getExamValue("CBC") || ""}
        onChange={handleExamChange}
      />
    </div>
  );
}
