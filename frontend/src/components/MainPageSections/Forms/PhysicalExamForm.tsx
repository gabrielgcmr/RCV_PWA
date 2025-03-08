import { FormSection } from "../../common/formUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput";

export default function PhysicalExamSection() {
  return (
    <FormSection title="🩺 Exame Físico">
      <BaseInput
        section="physicalExam"
        name="systolicBP"
        label="Pressão Arterial Sistólica (mmHg)"
        type="number"
        placeholder="PAS"
      />
      <BaseInput
        section="physicalExam"
        name="diastolicBP"
        label="Pressão Arterial Diastólica (mmHg)"
        type="number"
        placeholder="PAD"
      />
    </FormSection>
  );
}
