import { usePatient } from "../../../../hooks/usePatient";
import { ExamInput } from "../../../common/ExamInput";

export default function RenalProfileForm() {
  const { handleExamChange, getExamValue } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-1/4 text-white">
      <h2 className="text-lg font-bold mb-4">Excretas Renais</h2>

      <ExamInput
        examName="creatinine"
        label="Creatinina :"
        placeholder="Creatinina"
        value={getExamValue("creatinine") || ""}
        onChange={handleExamChange}
      />
      <ExamInput
        examName="urea"
        label="Ureia:"
        placeholder="Ureia"
        value={getExamValue("urea") || ""}
        onChange={handleExamChange}
      />
      <ExamInput
        examName="uricAcid"
        label="Ácido Úrico:"
        placeholder="Ácido Úrico"
        value={getExamValue("uricAcid") || ""}
        onChange={handleExamChange}
      />
    </div>
  );
}
