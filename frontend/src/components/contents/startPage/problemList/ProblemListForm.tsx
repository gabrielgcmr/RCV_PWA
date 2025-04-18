//src/components/contents/startPage
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionBase from "../../../common/SectionBase";
import { useCallback, useState } from "react";
import { usePatientStore } from "@/store/patient/usePatientStore";
import { Problem } from "@/types";
import CommonProblemsTab from "./CommonProblemsTab";

export default function ProblemListForm() {
  const {
    getProblemByKey: getProblem,
    addProblem,
    removeProblemByKey,
  } = usePatientStore();
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
    <SectionBase
      title="Lista de Problemas"
      icon="📋"
      id="problemList"
      className=" overflow-y-auto"
    >
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="common">Comuns</TabsTrigger>
          <TabsTrigger value="ciap2">CIAP-2</TabsTrigger>
          <TabsTrigger value="cid10">CID10</TabsTrigger>
          <TabsTrigger value="cid11">CID11</TabsTrigger>
          {/* Pode adicionar outros TabsTrigger futuramente */}
        </TabsList>

        <CommonProblemsTab
          toggleProblem={toggleProblem}
          handleKeyDown={handleKeyDown}
        />

        <TabsContent value="ciap2">
          <div className="text-sm text-muted-foreground p-2">
            Em breve: Pesquisa por CIAP-2
          </div>
        </TabsContent>

        <TabsContent value="cid10">
          <div className="text-sm text-muted-foreground p-2">
            Em breve: Pesquisa por CID-10
          </div>
        </TabsContent>

        <TabsContent value="cid11">
          <div className="text-sm text-muted-foreground p-2">
            Em breve: Pesquisa por CID-10
          </div>
        </TabsContent>
      </Tabs>
    </SectionBase>
  );
}
