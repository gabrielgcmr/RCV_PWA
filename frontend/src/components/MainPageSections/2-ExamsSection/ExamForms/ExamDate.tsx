import { usePatient } from "../../../../hooks/usePatient";

export default function ExamDateForm() {
  const { patientData, updatePatientData } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">

      {/* Data dos Exames Complementares */}
      <label htmlFor="exam-date" className="block text-base font-bold mb-2">
        Data dos exames:
      </label>
      
      <input
        id = "exam-date"
        type="date"
        value={patientData.complementaryExams.examsDate}
        onChange={(e) => updatePatientData("complementaryExams", {examsDate:e.target.value})}
        className="w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Data dos exames"
      />  
    </div>  
  );
}