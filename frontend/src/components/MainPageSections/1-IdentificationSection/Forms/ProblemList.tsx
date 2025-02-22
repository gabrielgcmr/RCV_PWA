import { usePatient } from "../../../../hooks/usePatient";

export default function ProblemListForm() {
  const { patientData, updatePatientData } = usePatient();

  // Função simples para adicionar/remover problemas da lista
  const handleProblemToggle = (problemName: string, checked: boolean) => {
    const existingProblems = patientData.problemList.problems.map((p) => p.name);

    let updatedProblems;

    if (checked) {
      // Adiciona o problema se não existir
      if (!existingProblems.includes(problemName)) {
        updatedProblems = [
          ...patientData.problemList.problems,
          { name: problemName },
        ];
      } else {
        updatedProblems = [...patientData.problemList.problems];
      }
    } else {
      // Remove o problema se ele existir
      updatedProblems = patientData.problemList.problems.filter(
        (p) => p.name !== problemName
      );
    }

    updatePatientData("problemList", { problems: updatedProblems });
  };

  // Verifica se o problema já está presente na lista
  const isProblemChecked = (problemName: string) =>
    patientData.problemList.problems.some((p) => p.name === problemName);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-4"> 📝 Lista de Problemas</h2>

      {/* HAS */}
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="HAS"
          checked={isProblemChecked("HAS")}
          onChange={(e) => handleProblemToggle("HAS", e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="HAS" className="text-sm font-medium">
          HAS
        </label>
      </div>

      {/* Diabetes */}
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="diabetes"
          checked={isProblemChecked("Diabetes")}
          onChange={(e) => handleProblemToggle("Diabetes", e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="diabetes" className="text-sm font-medium">
          Diabetes Mellitus
        </label>
      </div>

      {/* Tabagismo */}
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="smoker"
          checked={isProblemChecked("Tabagismo")}
          onChange={(e) => handleProblemToggle("Tabagismo", e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="smoker" className="text-sm font-medium">
          Tabagismo
        </label>
      </div>
    </div>
  );
}
