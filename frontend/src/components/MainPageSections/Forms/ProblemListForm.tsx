import { useProblemHandler } from "../../../hooks/useProblemHandler.";
import { FormSection } from "../../common/formUtils/FormSection";
import { BaseInput } from "../../common/Inputs/BaseInput";


export default function ProblemListSection() {
  const problems = ["HAS", "Diabetes", "Tabagismo"];
  const problemHandlers = useProblemHandler(problems);

  return (
    <FormSection title="📝 Lista de Problemas">
    {problems.map((problem) => (
      <BaseInput
        key={problem}
        section="problemList"
        name="problems" // Note que o 'name' aqui ainda é fixo, pois a seção 'problemList' só tem o campo 'problems'
        label={problem}
        type="checkbox"
        checked={problemHandlers[problem].isChecked}
        onChange={problemHandlers[problem].handleCheckboxChange}
      />
    ))}
  </FormSection>
  );
}
