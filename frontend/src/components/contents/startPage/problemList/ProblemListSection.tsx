//src/components/contents/startPage
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionBase from "../../../common/FormBase";
import { useCallback, useEffect, useState } from "react";
import { usePatientStore } from "@/store/patient/usePatientStore";
import mostCommonProblems from "@/constants/mostCommonProblems";
import { Problem } from "@/types";
import { searchIcd11 } from "@/services/icd/search";
import { fetchIcdToken } from "@/services/icd/api";
import { IcdEntity } from "@/services/icd/types";

export default function ProblemListForm() {
  const {
    getProblemByKey: getProblem,
    addProblem,
    removeProblemByKey,
  } = usePatientStore();
  const [tab, setTab] = useState("common");
  const [token, setToken] = useState<string>();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IcdEntity[]>([]);

  // Pegar token só uma vez
  useEffect(() => {
    fetchIcdToken().then(setToken);
  }, []);

  // Buscar ao digitar (pode debouncer se quiser)
  useEffect(() => {
    if (token && query.length >= 3) {
      searchIcd11(query, token).then(setResults);
    }
  }, [query, token]);

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
      className="max-w-80 overflow-y-auto"
    >
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="common">Comuns</TabsTrigger>
          <TabsTrigger value="ciap2">CIAP-2</TabsTrigger>
          <TabsTrigger value="cid10">CID10</TabsTrigger>
          <TabsTrigger value="cid11">CID11</TabsTrigger>
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

        <TabsContent value="cid10">
          <div className="text-sm text-muted-foreground p-2">
            Em breve: Pesquisa por CID-10
          </div>
        </TabsContent>

        <TabsContent value="cid11">
          <div className="p-2 space-y-2">
            <input
              type="text"
              placeholder="Pesquisar CID‑11..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-1 border rounded"
            />
            <div className="max-h-40 overflow-y-auto">
              {results.map((ent) => (
                <div key={ent.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={!!getProblem(ent.id)}
                    onChange={(e) =>
                      toggleProblem(
                        {
                          key: ent.id,
                          label: ent.title,
                          abbreviation: ent.theCode || undefined,
                          name: "",
                        },
                        e.target.checked
                      )
                    }
                    className="mr-2"
                  />
                  <label className="text-sm">
                    {ent.theCode ? `[${ent.theCode}] ` : ""}
                    {ent.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </SectionBase>
  );
}
