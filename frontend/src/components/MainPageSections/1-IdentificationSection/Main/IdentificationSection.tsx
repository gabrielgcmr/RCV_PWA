import IdentificationForm from "../Forms/IdentificationForm";
import PhysicalExamForm from "../Forms/PhysicalExamForm";
import ProblemListForm from "../Forms/ProblemList";

export default function IdentificationSection() {
  return (
      <div className="space-y-2">
        <IdentificationForm />
        <ProblemListForm />
        <PhysicalExamForm />
      </div>
  );
}