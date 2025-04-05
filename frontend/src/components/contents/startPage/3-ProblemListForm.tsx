import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";

const problemOptions = [
  { name: "hypertension", label: "Hipertensão Arterial (HAS)" },
  { name: "diabetes", label: "Diabetes Mellitus (DM)" },
  { name: "tabagism", label: "Tabagismo" },
  { name: "NAFLD", label: "DHGNA" },
  { name: "CKD", label: "DRC" },
];

function ProblemListForm() {
  const { hasProblem, toggleProblem } = usePatient();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleProblem(name, !hasProblem(name));
    }
  };

  return (
    <SectionBase title="Lista de Problemas" icon="📝" id="problemList">
      <form>
        {problemOptions.map(({ name, label }) => (
          <div key={name} className="flex items-center">
            <input
              type="checkbox"
              id={name}
              value={name}
              checked={hasProblem(name)}
              onChange={(e) => toggleProblem(name, e.target.checked)}
              onKeyDown={(e) => handleKeyDown(e, name)}
              className="mr-2 accent-blue-500 focus:ring-blue-200"
            />
            <label htmlFor={name} className="text-sm">
              {label}
            </label>
          </div>
        ))}
      </form>
    </SectionBase>
  );
}

export default ProblemListForm;
