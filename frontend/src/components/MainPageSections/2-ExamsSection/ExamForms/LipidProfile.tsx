import { usePatient } from "../../../../hooks/usePatient";
import { ExamInput } from "../../../common/ExamInput";

export default function LipidProfileForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-2">Lipidograma</h2>

      <ExamInput
        examName="totalCholesterol"
        abbreviation="CT"
        label="CT:"
        placeholder="CT"
        value={getExamValue("totalCholesterol") || ""}
        onChange={handleExamChange}
      />
      <ExamInput
        examName="ldlCholesterol"
        label="LDL:"
        placeholder="LDL"
        abbreviation="LDL"
        value={getExamValue("ldlCholesterol") || ""}
        onChange={handleExamChange}
      />
      <ExamInput
        examName="hdlCholesterol"
        abbreviation="HDL"
        label="HDL:"
        placeholder="HDL"
        value={getExamValue("hdlCholesterol") || ""}
        onChange={handleExamChange}
      />
      <ExamInput
        examName="triglycerides"
        abbreviation="Trig."
        label="Trig.:"
        placeholder="Trig."
        value={getExamValue("triglycerides") || ""}
        onChange={handleExamChange}
      />
    </div>
  );
}
