import { FormSection } from "../../common/FormUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput/BaseInput";

export default function ProblemListForm() {
  return (
    <FormSection title="📝 Lista de Problemas">
      <BaseInput name="HAS" label="HAS" type="checkbox" section="problemList" />
      <BaseInput name="Diabetes" label="DM" type="checkbox" section="problemList" />
      <BaseInput name="Tabagismo" label="Tabagismo" type="checkbox" section="problemList" />
    </FormSection>
  );
}
