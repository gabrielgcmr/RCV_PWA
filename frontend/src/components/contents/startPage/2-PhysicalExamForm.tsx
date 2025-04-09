// src/components/forms/PhysicalExamForm.tsx
import { usePatientStore } from "../../../store";
import SectionBase from "../../common/SectionBase";

function PhysicalExamForm() {
  const patient = usePatientStore((state) => state.patient);
  const setPatient = usePatientStore((state) => state.setPatient);

  const handlePhysicalExamChange = <
    K extends keyof typeof patient.physicalExam,
  >(
    field: K,
    value: (typeof patient.physicalExam)[K]
  ) => {
    setPatient({
      physicalExam: {
        ...patient.physicalExam,
        [field]: value,
      },
    });
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
          value={patient.physicalExam.systolicBP ?? ""}
          onChange={(e) =>
            handlePhysicalExamChange("systolicBP", e.target.value)
          }
          className="w-26 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200 mb-2"
        />

        <label htmlFor="diastolicBP" className="block text-sm font-medium">
          Pressão Arterial Diastólica
        </label>
        <input
          type="number"
          id="diastolicBP"
          placeholder="PAD"
          value={patient.physicalExam.diastolicBP ?? ""}
          onChange={(e) =>
            handlePhysicalExamChange("diastolicBP", e.target.value)
          }
          className="w-26 p-1 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-200"
        />
      </form>
    </SectionBase>
  );
}

export default PhysicalExamForm;
