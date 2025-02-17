import { usePatient } from "../hooks/usePatient";

export default function PhysicalExamForm() {
  const { patientData, updatePatientData } = usePatient();


  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-full text-white">
      <h2 className="text-lg font-bold mb-4">🩺 Exame Físico</h2>

      {/* Pressão Arterial Sistólica */}
      <label className="block text-sm font-medium">
        Pressão Arterial Sistólica (mmHg):
      </label>
      <input
        type="number"
        value={patientData.physicalExam.systolicBP}
        onChange={(e) => updatePatientData("physicalExam", {systolicBP:e.target.value})}
        className="w-full p-2 border rounded mb-2 bg-zinc-600 text-white"
        placeholder="Digite a pressão sistólica"
      />

      {/* Pressão Arterial Diastólica */}
      <label className="block text-sm font-medium">
        Pressão Arterial Diastólica (mmHg):
      </label>
      <input
        type="number"
        value={patientData.physicalExam.diastolicBP}
        onChange={(e) => updatePatientData("physicalExam", {diastolicBP:e.target.value})}
        className="w-full p-2 border rounded mb-2 bg-zinc-600 text-white"
        placeholder="Digite a pressão diastólica"
      />
    </div>
  );
}
