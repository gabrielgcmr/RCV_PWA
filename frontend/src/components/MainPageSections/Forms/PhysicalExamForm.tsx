import { FormSection } from "../../common/FormUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput/BaseInput";

export default function PhysicalExamForm() {
  return (
    <FormSection title="🩺 Exame Físico">
      <BaseInput name="systolicBP" label="Pressão Arterial Sistólica (mmHg)" type="number" section="physicalExam" placeholder="PAS" />
      <BaseInput name="diastolicBP" label="Pressão Arterial Diastólica (mmHg)" type="number" section="physicalExam" placeholder="PAD" />
    </FormSection>
  );
}
