import { GenericInput } from "../../../common/Inputs/GenericInput";

export default function CBCForm() {

  return (
    <div className="p-4 bg-zinc-600 rounded-lg shadow-md text-white flex-shrink-0 flex-1">
      <h2 className="text-lg font-bold mb-4">Hemograma</h2>

      <GenericInput
        name="CBC"
        label="Hemograma"
        type = "select"  
        abbreviation="HMG" 
        options={[
          { option: "Normal", value: "Normal" },
          { option: "Alterado", value: "Alterado" },
        ]}
      />
      <GenericInput
        name= "platelets"
        label="Plaquetas"
        type="number"
        abbreviation="plaq." 
        placeholder="Plaquetas"
      />
    </div>
  );
}
