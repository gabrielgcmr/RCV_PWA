import IdentificationForm from "../Forms/IdentificationForm";
import PhysicalExamForm from "../Forms/PhysicalExamForm";
import ProblemListForm from "../Forms/ProblemListForm";

export default function IdentificationSection() {
  return (
      <div className="p-2 space-y-4">
        <IdentificationForm />
        <ProblemListForm />
        <PhysicalExamForm />
        
      </div>
  );
}