import { usePatient } from "../../hooks/usePatient";
import NumberInput  from "../common/inputs/NumberInput";

export default function PhysicalExamForm() {
  const { patientData, updatePatientData } = usePatient();

  const handleChange = (field: string, value: string | number) => {
    updatePatientData("physicalExam", { ...patientData.physicalExam, [field]: value });
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-2">
      <h2 className="text-lg font-bold mb-4">🩺 Exame Físico</h2>

      {/* Pressão Arterial Sistólica */}
      <NumberInput
      name = "systolicBP"
      label = "Pressão Arterial Sistólica"
      value = {patientData.physicalExam.systolicBP}
      onChange = {handleChange}
      placeholder = "PAS"
      />

      {/* Pressão Arterial Diastólica */}
      <NumberInput
      name = "diastolicBP"
      label = "Pressão Arterial Diastolica"
      value = {patientData.physicalExam.diastolicBP}
      onChange = {handleChange}
      placeholder = "PAD"
      />
    </div>
  );
}
