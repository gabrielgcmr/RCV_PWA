import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FormBase from "../../common/FormBase";
import { useCallback, useState } from "react";
import { usePatientStore } from "@/store/patient/usePatientStore";
import mostCommonProblems from "@/constants/mostCommonProblems";
import { Problem } from "@/types";

export default function ProblemListForm() {
  const { getProblem, addProblem, removeProblemByKey } = usePatientStore();
  const [tab, setTab] = useState("common");

  // Função para adicionar ou remover um problema da lista
  const toggleProblem = useCallback(
    (problemToAdd: Problem, checked: boolean) => {
      if (checked) {
        addProblem(problemToAdd);
      } else {
        removeProblemByKey(problemToAdd.key);
      }
    },
    [addProblem, removeProblemByKey]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, problem: Problem) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleProblem(problem, !getProblem(problem.key));
      }
    },
    [getProblem, toggleProblem]
  );

  return (
    <FormBase
      title="Lista de Problemas"
      icon="📋"
      id="problemList"
      className="max-w-80 overflow-y-auto"
    >
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="common">Comuns</TabsTrigger>
          <TabsTrigger value="ciap2">CIAP-2</TabsTrigger>
          {/* Pode adicionar outros TabsTrigger futuramente */}
        </TabsList>

        <TabsContent value="common">
          <div className="max-h-50 overflow-y-auto pr-2 space-y-2">
            <form>
              {mostCommonProblems.map((problem) => (
                <div key={problem.key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={problem.key}
                    value={problem.key}
                    checked={!!getProblem(problem.key)}
                    onChange={(e) => toggleProblem(problem, e.target.checked)}
                    onKeyDown={(e) => handleKeyDown(e, problem)}
                    className="mr-2 accent-blue-500 focus:ring-blue-200"
                  />
                  <label htmlFor={problem.key} className="text-sm">
                    {problem.abbreviation || problem.label}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </TabsContent>

        <TabsContent value="ciap2">
          <div className="text-sm text-muted-foreground p-2">
            Em breve: Pesquisa por CIAP-2
          </div>
        </TabsContent>
      </Tabs>
    </FormBase>
  );
}
