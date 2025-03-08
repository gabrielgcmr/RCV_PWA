import { useMemo } from "react";
import { usePatient } from "./usePatient";

export function useProblemHandler(problemNames: string[]) {
  const { patientData, toggleProblem } = usePatient();

  const handlers = useMemo(() => {
    const result: Record<string, { isChecked: boolean; handleCheckboxChange: () => void }> = {};
    for (const problemName of problemNames) {
      const isChecked = patientData.problemList.problems.some((p) => p.name === problemName);
      result[problemName] = {
        isChecked,
        handleCheckboxChange: () => toggleProblem(problemName),
      };
    }
    return result;
  }, [patientData, problemNames, toggleProblem]);

  return handlers;
}
