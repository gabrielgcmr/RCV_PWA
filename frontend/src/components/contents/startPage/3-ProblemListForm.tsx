import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { usePatientStore } from "@/stores/usePatientStore";

const MODES = ["freestyle", "ciap2", "cid11"] as const;
type Mode = (typeof MODES)[number];

const problemOptions = [
  { name: "hypertension", label: "HAS" },
  { name: "diabetes", label: "DM" },
  { name: "tabagism", label: "Tabagismo" },
  { name: "NAFLD", label: "DHGNA" },
  { name: "CKD", label: "DRC" },
];

export default function ProblemListPage() {
  const [mode, setMode] = useState<Mode>("freestyle");
  const { patient, updatePatient } = usePatientStore();

  const toggleProblem = (problemName: string, isChecked: boolean) => {
    const currentProblems = patient.problemList.problems || [];
    const updatedProblems = isChecked
      ? [...currentProblems, { name: problemName }]
      : currentProblems.filter((p) => p.name !== problemName);

    updatePatient("problemList", { problems: updatedProblems });
  };

  const hasProblem = (problemName: string) => {
    return patient.problemList?.problems?.some((p) => p.name === problemName);
  };

  const renderModeContent = () => {
    if (mode === "freestyle") {
      return (
        <div className="flex gap-6">
          <div className="w-1/2 space-y-4">
            <div className="space-y-2">
              {problemOptions.map(({ name, label }) => (
                <div key={name} className="flex items-center">
                  <input
                    type="checkbox"
                    id={name}
                    checked={hasProblem(name)}
                    onChange={(e) => toggleProblem(name, e.target.checked)}
                    className="mr-2 accent-blue-500"
                  />
                  <label htmlFor={name}>{label}</label>
                </div>
              ))}
            </div>
            <Input placeholder="Buscar problema..." />
          </div>

          <div className="w-1/2">
            <Card>
              <CardContent className="p-4 space-y-2">
                {patient.problemList.problems?.map((p) => (
                  <div
                    key={p.name}
                    className="border p-2 rounded-md text-sm bg-muted"
                  >
                    {p.name}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <Input placeholder="Buscar problema..." />
        <p className="text-muted-foreground text-sm">
          Diagnósticos disponíveis serão listados aqui conforme pesquisa.
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {MODES.map((m) => (
          <Button
            key={m}
            variant={m === mode ? "default" : "outline"}
            onClick={() => setMode(m)}
          >
            {m.toUpperCase()}
          </Button>
        ))}
      </div>
      {renderModeContent()}
    </div>
  );
}
