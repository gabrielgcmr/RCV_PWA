// src/components/forms/PhysicalExamForm.tsx
import FormBase from "@/components/common/FormBase";
import { usePatientStore } from "@/store/patient";

function PhysicalExamForm() {
  const { physicalExam, setPhysicalExamField } = usePatientStore();
  return (
    <FormBase
      title="Exame Físico"
      icon="🩺"
      id="physicalExam "
      className=" max-w-80 overflow-y-auto"
    >
      <form>
        <label htmlFor="systolicBP" className="block text-sm font-medium">
          Pressão Arterial Sistólica
        </label>
        <input
          type="number"
          id="systolicBP"
          placeholder="PAS"
          value={physicalExam.systolicBP ?? ""}
          onChange={(e) => setPhysicalExamField("systolicBP", e.target.value)}
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
          onChange={(e) => setPhysicalExamField("diastolicBP", e.target.value)}
          className="w-26 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200"
        />
      </form>
    </FormBase>
  );
}

export default PhysicalExamForm;
