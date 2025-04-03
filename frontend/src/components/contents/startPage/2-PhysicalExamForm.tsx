import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";
import TextInput from "../../common/input/TextInput";

function PhysicalExamForm() {
  const { patient, updateField } = usePatient();

  return (
    <SectionBase title="Exame Físico" icon="🩺">
      <TextInput
        name="systolicBP"
        label="Pressão Arterial Sistólica"
        value={patient.physicalExam.systolicBP}
        onChange={(value) => updateField("physicalExam", "systolicBP", value)}
        placeholder="PAS"
      />

      <TextInput
        name="diastolicBP"
        label="Pressão Arterial Diastolica"
        value={patient.physicalExam.diastolicBP}
        onChange={(value) => updateField("physicalExam", "diastolicBP", value)}
        placeholder="PAD"
      />
    </SectionBase>
  );
}

export default PhysicalExamForm;
