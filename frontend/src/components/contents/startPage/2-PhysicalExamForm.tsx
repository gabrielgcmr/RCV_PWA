// src/components/forms/PhysicalExamForm.tsx
import SectionBase from "@/components/common/FormBase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePatientStore } from "@/store/patient/usePatientStore";

function PhysicalExamForm() {
  const { physicalExam, setPhysicalExamField } = usePatientStore();

  return (
    <SectionBase
      title="Exame Físico"
      icon="🩺"
      id="physicalExam"
      className="max-w-80 overflow-y-auto"
    >
      <form className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="systolicBP">Pressão Sistólica</Label>
          <Input
            id="systolicBP"
            type="number"
            placeholder="PAS"
            value={physicalExam.systolicBP ?? ""}
            onChange={(e) => setPhysicalExamField("systolicBP", e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="diastolicBP">Pressão Diastólica</Label>
          <Input
            id="diastolicBP"
            type="number"
            placeholder="PAD"
            value={physicalExam.diastolicBP ?? ""}
            onChange={(e) =>
              setPhysicalExamField("diastolicBP", e.target.value)
            }
          />
        </div>
      </form>
    </SectionBase>
  );
}

export default PhysicalExamForm;
