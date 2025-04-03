import usePatient from "../../../hooks/usePatient";
import FormBase from "../../common/form/FormBase";
import NumberInput from "../../common/input/NumberInput";

function PhysicalExamForm() {
  const { patient, updateField } = usePatient();

  return (
    <FormBase title="Exame Físico" icon="🩺">
      <NumberInput
        name="systolicBP"
        label="Pressão Arterial Sistólica"
        value={patient.physicalExam.systolicBP}
        onChange={(value) => updateField("physicalExam", "systolicBP", value)}
        placeholder="PAS"
      />

      <NumberInput
        name="diastolicBP"
        label="Pressão Arterial Diastolica"
        value={patient.physicalExam.diastolicBP}
        onChange={(value) => updateField("physicalExam", "diastolicBP", value)}
        placeholder="PAD"
      />
    </FormBase>
  );
}

export default PhysicalExamForm;
