import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";
import CheckboxGroup from "../../common/input/CheckBoxGroup";

const problemOptions = [
  { value: "hypertension", label: "Hipertensão Arterial (HAS)" },
  { value: "diabetes", label: "Diabetes Mellitus (DM)" },
  { value: "tabagism", label: "Tabagismo" },
  { value: "NAFLD", label: "DHGNA" },
  { value: "CKD", label: "DRC" },
];

function ProblemListForm() {
  const { toggleProblem, hasProblem } = usePatient();

  return (
    <SectionBase title="Lista de Problemas" icon="📝">
      <CheckboxGroup
        options={problemOptions}
        isChecked={(value) => hasProblem(value)}
        onChange={(value, checked) => toggleProblem(value, checked)}
      />
    </SectionBase>
  );
}

export default ProblemListForm;
