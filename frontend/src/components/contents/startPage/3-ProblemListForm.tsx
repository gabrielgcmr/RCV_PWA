import { useCallback } from "react";
import SectionBase from "../../common/SectionBase";
import { usePatient } from "@/hooks";

const problemOptions = [
  { name: "hypertension", label: "HAS" },
  { name: "diabetes", label: "DM" },
  { name: "tabagism", label: "Tabagismo" },
  { name: "NAFLD", label: "DHGNA" },
  { name: "CKD", label: "DRC" },
];

function ProblemListForm() {
  const { hasProblem, toggleProblem } = usePatient();

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, name: string) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleProblem(name, !hasProblem(name));
      }
    },
    [hasProblem, toggleProblem]
  );

  return (
    <SectionBase
      title="Lista de Problemas"
      icon="📋"
      id="problemList"
      className=" max-w-80 overflow-y-auto"
    >
      <div className="max-h-50 overflow-y-auto pr-2 space-y-2">
        {" "}
        {/* 👈 Define altura máxima com rolagem */}
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
                aria-labelledby={`label-${name}`}
              />
              <label htmlFor={name} id={`label-${name}`} className="text-sm">
                {label}
              </label>
            </div>
          ))}
        </form>
      </div>
    </SectionBase>
  );
}

export default ProblemListForm;
