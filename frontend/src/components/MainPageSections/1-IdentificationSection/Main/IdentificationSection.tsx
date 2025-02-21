import HabitsForm from "../Forms/HabitsForm";
import IdentificationForm from "../Forms/IdentificationForm";
import PhysicalExamForm from "../Forms/PhysicalExamForm";

export default function IdentificationSection() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-zinc-800 p-4 rounded-lg shadow space-y-4">
        <IdentificationForm />
        <PhysicalExamForm />
        <HabitsForm />
      </div>
    </div>
  );
}