import { GenericInput } from "../../../common/Inputs/GenericInput";

export default function UrinalysisForm() {

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 flex-1 ">
      <h2 className="text-lg font-bold mb-4">EAS</h2>

      {/* Select com opções pré-definidas */}
      <GenericInput
        name="UR"
        abbreviation="EAS"
        label="EAS"
        type="select"
        options={[
          { option: "Normal", value: "Normal" },
          { option: "Alterado", value: "Alterado" },
        ]}
      />
    </div>
  );
}
