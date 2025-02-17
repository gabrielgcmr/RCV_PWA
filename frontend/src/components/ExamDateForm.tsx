import { usePatient } from "../context/usePatient";

export default function ExamDateForm() {
  const { patientData, updatePatientData } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-full text-white">
      <h2 className="text-lg font-bold mb-4">🩺 Exame Físico</h2>

      {/* Data dos Exames Complementares */}
      <label className="block text-sm font-medium">
        Data:
      </label>
      <input
        type="date"
        value={patientData.complementaryExams.examsDate}
        onChange={(e) => updatePatientData("complementaryExams", {examsDate:e.target.value})}
        className="w-full p-2 border rounded mb-2 bg-zinc-600 text-white"
        placeholder="Data dos exames"
      />    
    </div>  
);
}