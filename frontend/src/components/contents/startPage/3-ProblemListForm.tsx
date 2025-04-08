// src/components/form/problem/ProblemListForm.tsx

import { useCallback } from "react";
import SectionBase from "../../common/form/SectionBase";
import { Problem } from "../../../interfaces";
import { usePatientStore } from "../../../store";

const suggestedProblems: Problem[] = [
  {
    code: "K86",
    codeSystem: "CIAP2",
    abreviation: "HAS",
    description: "Hipertensão arterial sistêmica",
  },
  {
    code: "T90",
    codeSystem: "CIAP2",
    abreviation: "DM",
    description: "Diabetes mellitus",
  },
  {
    code: "P17",
    codeSystem: "CIAP2",
    abreviation: "Tabagismo",
    description: "Tabagismo ativo",
  },
  {
    code: "D97",
    codeSystem: "CIAP2",
    abreviation: "DHGNA",
    description: "Doença hepática gordurosa não alcoólica",
  },
  {
    code: "U99",
    codeSystem: "CIAP2",
    abreviation: "DRC",
    description: "Doença renal crônica",
  },
];

function ProblemListForm() {
  const { patient, setPatient } = usePatientStore();
  const problemList = patient.problemList;

  const hasProblem = useCallback(
    (code: string) => problemList.some((p) => p.code === code),
    [problemList]
  );

  const toggleProblem = useCallback(
    (problem: Problem) => {
      const exists = hasProblem(problem.code!);

      const updatedList = exists
        ? problemList.filter((p) => p.code !== problem.code)
        : [...problemList, problem];

      setPatient({ problemList: updatedList });
    },
    [problemList, setPatient, hasProblem]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, problem: Problem) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleProblem(problem);
      }
    },
    [toggleProblem]
  );

  return (
    <SectionBase title="Lista de Problemas" icon="📋" id="problemList">
      <div className="max-h-50 overflow-y-auto pr-2 space-y-2">
        <form>
          {suggestedProblems.map((problem) => (
            <div key={problem.code} className="flex items-center">
              <input
                type="checkbox"
                id={problem.code}
                checked={hasProblem(problem.code!)}
                onChange={() => toggleProblem(problem)}
                onKeyDown={(e) => handleKeyDown(e, problem)}
                className="mr-2 accent-blue-500 focus:ring-blue-200"
                aria-labelledby={`label-${problem.code}`}
              />
              <label
                htmlFor={problem.code}
                id={`label-${problem.code}`}
                className="text-sm"
              >
                {problem.abreviation}
              </label>
            </div>
          ))}
        </form>
      </div>
    </SectionBase>
  );
}

export default ProblemListForm;
