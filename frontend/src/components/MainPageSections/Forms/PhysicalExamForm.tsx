import { FormSection } from "../../common/FormUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput/BaseInput";

export default function PhysicalExamForm() {
  return (
    <FormSection title="🩺 Exame Físico">
      <BaseInput name="systolicBP" label="Pressão Arterial Sistólica (mmHg)" type="number" formSection="physicalExam" placeholder="PAS" />
      <BaseInput name="diastolicBP" label="Pressão Arterial Diastólica (mmHg)" type="number" formSection="physicalExam" placeholder="PAD" />
    </FormSection>
  );
}
