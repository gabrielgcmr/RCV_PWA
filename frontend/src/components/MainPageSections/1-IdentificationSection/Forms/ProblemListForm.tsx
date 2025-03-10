import { usePatient } from "../../../../hooks/usePatient";
import { CheckboxInput } from "../../../common/Inputs/CheckboxInputProps";

export default function ProblemListForm() {
  const { patientData, updatePatientData } = usePatient();

  const problemOptions = [
    { name: "HAS", label: "Hipertensão Arterial (HAS)" },
    { name: "Diabetes", label: "Diabetes Mellitus (DM)" },
    { name: "Tabagismo", label: "Tabagismo" },
    { name: "DHGNA", label: "DHGNA (NAFLD)"}
  ];

  // Função simplificada para adicionar/remover problemas
  const handleProblemToggle = (problemName: string, checked: boolean) => {
    const updatedProblems = checked
      ? [...patientData.problemList.problems, { name: problemName }]
      : patientData.problemList.problems.filter((p) => p.name !== problemName);

    updatePatientData("problemList", { problems: updatedProblems });
  };

  const isProblemChecked = (problemName: string) =>
    patientData.problemList.problems.some((p) => p.name === problemName);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-2">
      <h2 className="text-lg font-bold mb-4"> 📝 Lista de Problemas</h2>

      {problemOptions.map(({ name, label }) => (
        <CheckboxInput
          id={name}
          key={name}
          name={name}
          label={label}
          checked={isProblemChecked(name)}
          onChange={handleProblemToggle} // Agora passa boolean direto, sem `value`
        />
      ))}
    </div>
  );
}
