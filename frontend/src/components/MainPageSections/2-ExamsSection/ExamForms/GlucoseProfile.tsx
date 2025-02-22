import { usePatient } from "../../../../hooks/usePatient";
import { ExamInput } from "../../../common/ExamInput";

export default function GlucoseProfileForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white flex-shrink-0 min-w-[50px] max-w-[150px]">
      <h2 className="text-lg font-bold mb-2">Perfil Glicêmico</h2>

      <ExamInput
        examName="fastingGlucose"
        abbreviation="GJ"
        label="Glicemia de Jejum"
        placeholder="Glicemia de Jejum"
        value={getExamValue("fastingGlucose") || ""}
        onChange={handleExamChange}
      />

      <ExamInput
        examName="hba1c"
        abbreviation="HbA1c"
        label="HbA1c (%):"
        placeholder="HbA1c"
        value={getExamValue("hba1c") || ""}
        onChange={handleExamChange}
      />
    </div>
  );
}
