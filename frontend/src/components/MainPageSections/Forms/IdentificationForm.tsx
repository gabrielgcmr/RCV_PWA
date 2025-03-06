import { FormSection } from "../../common/FormUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput/BaseInput";
import { BaseSelectInput } from "../../common/Inputs/BaseInput/SelectInput";

export default function IdentificationForm() {
  return (
    <FormSection title="🏷️ Identificação">
      <BaseInput name="name" type="text" label="Nome" section="identification" placeholder="Nome do paciente" />
      <BaseInput name="age" type="number" label="Idade" section="identification" placeholder="Idade" />

      <div className="flex gap-2 mb-1">
        <BaseInput name="gender" value="male" type="radio" section="identification" label="Masculino" />
        <BaseInput name="gender" value="female" type="radio" section="identification" label="Feminino" />
      </div>

      <BaseSelectInput
        name="race"
        label="Raça"
        type="select"
        section="identification"
        options={[
          { label: "Branco", value: "white" },
          { label: "Preto", value: "black" },
          { label: "Outro", value: "other" },
        ]}
      />
    </FormSection>
  );
}
