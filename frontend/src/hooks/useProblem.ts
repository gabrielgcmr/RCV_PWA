// src/hooks/useProblems.ts
import { usePatientStore } from "@/store/patient";

export const useProblems = () => {
  const problems = usePatientStore((state) => state.problems);
  const add = usePatientStore((state) => state.addProblem);
  const remove = usePatientStore((state) => state.removeProblembyName);
  const update = usePatientStore((state) => state.updateProblembyName);

  const has = (name: string) => problems.some((p) => p.key === name);

  const toggle = (name: string, shouldAdd: boolean) => {
    if (shouldAdd && !has(name)) {
      add({ key: name });
    } else if (!shouldAdd) {
      remove(name);
    }
  };

  return {
    problems,
    hasProblem: has,
    toggleProblem: toggle,
    updateProblem: update,
  };
};
