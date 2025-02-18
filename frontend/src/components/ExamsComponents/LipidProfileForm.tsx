import { usePatient } from "../../hooks/usePatient";

export default function LipidProfileForm() {
  const { patientData, handleExamChange } = usePatient();

   // Função para encontrar um exame no array pelo nome
   const findExamValue = (examName: string) => {
    return patientData.complementaryExams.exams.find(exam => exam.name === examName)?.value || "";
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-1/4 text-white">
      <h2 className="text-lg font-bold mb-4">Lipidograma</h2>

      {/* Colesterol Total */}
      <label className="block text-sm font-medium mb-1">CT:
      <input
        type="number"
        value={findExamValue("totalCholesterol")}
        onChange={(e) => handleExamChange("totalCholesterol",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="CT"
      />
      </label>

      {/* Colesterol LDL */}
      <label className="block text-sm font-medium mb-1">LDL:
      <input
        type="number"
        value={findExamValue("ldlCholesterol")}
        onChange={(e) => handleExamChange("ldlCholesterol",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="LDL"
      />
      </label>
      {/* Colesterol HDL */}
      <label className="block text-sm font-medium mb-1">HDL:
      <input
        type="number"
        value={findExamValue("hdlCholesterol")}
        onChange={(e) => handleExamChange("hdlCholesterol",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="HDL"
      />
      </label>
      {/* Triglicerídeos */}
      <label className="block text-sm font-medium mb-1">Trig.:
      <input
        type="number"
        value={findExamValue("triglycerides")}
        onChange={(e) => handleExamChange("triglycerides",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="Trig."
      />
      </label>
    </div>
  );
}
