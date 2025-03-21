import  usePatient  from "../../hooks/usePatient";
import NumberInput  from "../common/input/NumberInput";

function PhysicalExamSection() {
  const { patientData, updatePhysicalExam } = usePatient();

  const handleChange = (field: string, value: string | number | null) => {
    updatePhysicalExam( { [field]: value });
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-1">
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

export default PhysicalExamSection