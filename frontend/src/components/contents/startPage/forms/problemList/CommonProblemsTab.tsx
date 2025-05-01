import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { usePatientStore } from "@/store/patient/usePatientStore";

import { Problem } from "@/types";
import mostCommonProblems from "./mostCommonProblems";

interface CommonProblemsTabProps {
  toggleProblem: (problem: Problem, checked: boolean) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    problem: Problem
  ) => void;
}

export default function CommonProblemsTab({
  toggleProblem,
  handleKeyDown,
}: CommonProblemsTabProps) {
  const { getProblemByKey } = usePatientStore();

  return (
    <TabsContent value="common">
      <div className="max-h-50 overflow-y-auto pr-2 space-y-2">
        <form>
          {mostCommonProblems.map((problem) => (
            <div key={problem.key} className="flex items-center">
              <input
                type="checkbox"
                id={problem.key}
                value={problem.key}
                checked={!!getProblemByKey(problem.key)}
                onChange={(e) => toggleProblem(problem, e.target.checked)}
                onKeyDown={(e) => handleKeyDown(e, problem)}
                className="mr-2 accent-blue-500 focus:ring-blue-200"
              />
              <label htmlFor={problem.key} className="text-sm">
                {problem.abbreviation || problem.key}
              </label>
            </div>
          ))}
        </form>
      </div>
    </TabsContent>
  );
}
