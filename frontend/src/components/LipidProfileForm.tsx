import { usePatient } from "../hooks/usePatient";

export default function LipidProfileForm() {
  const { patientData, updatePatientData } = usePatient();

   // Função para encontrar um exame no array pelo nome
   const findExamValue = (examName: string) => {
    return patientData.complementaryExams.exams.find(exam => exam.name === examName)?.value || "";
  };

   // Função para atualizar um exame no array
   const handleExamChange = (examName: string, value: string) => {
    const updatedExams = [...patientData.complementaryExams.exams];
    const examIndex = updatedExams.findIndex(exam => exam.name === examName);

    if (examIndex !== -1) {
      updatedExams[examIndex].value = value; // Atualiza exame existente
    } else {
      updatedExams.push({ name: examName, value }); // Adiciona novo exame se não existir
    }

    updatePatientData("complementaryExams", { 
      examsDate: patientData.complementaryExams.examsDate,
      exams: updatedExams });
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-1/4 text-white">
      <h2 className="text-lg font-bold mb-4">Lipidograma</h2>

      {/* Colesterol Total */}
      <label className="block text-sm font-medium mb-1">CT:</label>
      <input
        type="number"
        value={findExamValue("totalCholesterol")}
        onChange={(e) => handleExamChange("totalCholesterol",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="CT"
      />

      {/* Colesterol LDL */}
      <label className="block text-sm font-medium mb-1">LDL:</label>
      <input
        type="number"
        value={findExamValue("ldlCholesterol")}
        onChange={(e) => handleExamChange("ldlCholesterol",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="LDL"
      />

      {/* Colesterol HDL */}
      <label className="block text-sm font-medium mb-1">HDL:</label>
      <input
        type="number"
        value={findExamValue("hdlCholesterol")}
        onChange={(e) => handleExamChange("hdlCholesterol",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="HDL"
      />

      {/* Triglicerídeos */}
      <label className="block text-sm font-medium mb-1">Trig.:</label>
      <input
        type="number"
        value={findExamValue("triglycerides")}
        onChange={(e) => handleExamChange("triglycerides",e.target.value)}
        className="w-full p-2 border rounded mb-2 text-white"
        placeholder="Trig."
      />
    </div>
  );
}
