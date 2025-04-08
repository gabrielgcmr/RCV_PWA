import SectionBase from "@/components/common/form/SectionBase";
import { usePatientStore } from "@/stores/usePatientStore";

function PhysicalExamForm() {
  const { patient, updatePatient } = usePatientStore();
  const { physicalExam } = patient;

  const handleChange = (field: "systolicBP" | "diastolicBP", value: string) => {
    updatePatient("physicalExam", { [field]: value });
  };

  return (
    <SectionBase title="Exame Físico" icon="🩺" id="physicalExam">
      <form>
        <label htmlFor="systolicBP" className="block text-sm font-medium">
          Pressão Arterial Sistólica
        </label>
        <input
          type="number"
          id="systolicBP"
          placeholder="PAS"
          value={physicalExam.systolicBP ?? ""}
          onChange={(e) => handleChange("systolicBP", e.target.value)}
          className="w-26 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-2"
        />

        <label htmlFor="diastolicBP" className="block text-sm font-medium">
          Pressão Arterial Diastólica
        </label>
        <input
          type="number"
          id="diastolicBP"
          placeholder="PAD"
          value={physicalExam.diastolicBP ?? ""}
          onChange={(e) => handleChange("diastolicBP", e.target.value)}
          className="w-26 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200"
        />
      </form>
    </SectionBase>
  );
}

export default PhysicalExamForm;
