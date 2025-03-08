import { FormSection } from "../../common/formUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput";
import { SelectInput } from "../../common/Inputs/SelectInput";

export default function IdentificationSection() {
  return (
    <FormSection title="🏷️ Identificação">
      <BaseInput section = "identification" name="name" type="text" label="Nome" placeholder="Nome do paciente" />
      <BaseInput section = "identification" name="age" type="number" label="Idade" placeholder="Idade" />

      <div className="flex gap-2 mb-1">
        <BaseInput section = "identification" name="gender" value="male" type="radio"  label="Masculino" />
        <BaseInput section = "identification" name="gender" value="female" type="radio"  label="Feminino" />
      </div>

      <SelectInput
        section = "identification"
        name="race"
        label="Raça"
        type="select"
        options={[
          { label: "Branco", value: "white" },
          { label: "Preto", value: "black" },
          { label: "Outro", value: "other" },
        ]}
      />
    </FormSection>
  );
}
