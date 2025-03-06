import { usePatient } from "../../../../hooks/usePatient";
import { GenericInput } from "../../../common/Inputs/GenericInput";
import { NumberInput } from "../../../common/Inputs/old/NumberInput";

export default function PhysicalExamForm() {
  const { patientData, updatePatientData } = usePatient();
  const { physicalExam } = patientData;

  // Função para atualizar os valores do exame físico
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    updatePatientData("physicalExam", {...physicalExam,[name]: value,});
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-2">🩺 Exame Físico</h2>

      {/* Pressão Arterial Sistólica */}
      <GenericInput
        name="systolicBP"
        label="Pressão Arterial Sistólica (mmHg)"
        type="number"
        value={physicalExam.systolicBP}
        onChange={handleInputChange}
        placeholder="PAS"
      />

      {/* Pressão Arterial Diastólica */}
      <NumberInput
        name="diastolicBP"
        label="Pressão Arterial Diastólica (mmHg)"
        type="number"
        value={physicalExam.diastolicBP}
        onChange={handleInputChange}
        placeholder="PAD"
      />
    </div>
  );
}
