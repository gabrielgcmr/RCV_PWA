import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FormBase from "../../common/FormBase";
import { useCallback, useState } from "react";
import { usePatientStore } from "@/store/patient";
import mostCommonProblems from "@/constants/mostCommonProblems";

export default function ProblemListForm() {
  const {problems, addProblem,removeProblembyName} = usePatientStore()
  const [tab, setTab] = useState("common");

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
    <FormBase
      title="Lista de Problemas"
      icon="📋"
      id="problemList"
      className="max-w-80 overflow-y-auto"
    >
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="common">Problemas Comuns</TabsTrigger>
          <TabsTrigger value="ciap2">CIAP-2</TabsTrigger>
          {/* Pode adicionar outros TabsTrigger futuramente */}
        </TabsList>

        <TabsContent value="common">
          <div className="max-h-50 overflow-y-auto pr-2 space-y-2">
            <form>
              {mostCommonProblems.map(option =>({ 
                value: option.key,
                label: option.abbreviation|| option.key   }) => (
                <div key={name} className="flex items-center">
                  <input
                    type="checkbox"
                    id={name}
                    value={name}
                    checked={problems(name)}
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
