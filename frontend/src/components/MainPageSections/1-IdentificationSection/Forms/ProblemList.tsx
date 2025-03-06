import { usePatient } from "../../../../hooks/usePatient";
import { GenericInput } from "../../../common/Inputs/GenericInput"; // Importe o GenericInput

export default function ProblemListForm() {
  const { patientData, updatePatientData } = usePatient();

  // Adiciona ou remove um problema da lista do paciente
  const handleProblemToggle = (problemName: string, checked: boolean) => {
    let updatedProblems = [...patientData.problemList.problems];

    if (checked) {
      if (!updatedProblems.some((p) => p.name === problemName)) {
        updatedProblems.push({ name: problemName });
      }
    } else {
      updatedProblems = updatedProblems.filter((p) => p.name !== problemName);
    }

    updatePatientData("problemList", { problems: updatedProblems });
  };

  // Verifica se um problema já está na lista
  const isProblemChecked = (problemName: string) =>
    patientData.problemList.problems.some((p) => p.name === problemName);

  // Lista de problemas disponíveis
  const problems = [
    { id: "HAS", label: "HAS" },
    { id: "Diabetes", label: "DM" },
    { id: "Tabagismo", label: "Tabagismo" },
  ];

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-4"> 📝 Lista de Problemas</h2>

      {problems.map((problem) => (
        <GenericInput
          key={problem.id}
          name={problem.id}
          label={problem.label}
          type="checkbox" // Define o tipo como checkbox
          checked={isProblemChecked(problem.id)}
          onChange={(e) => handleProblemToggle(problem.id, (e.target as HTMLInputElement).checked)}
        />
      ))}
    </div>
  );
}