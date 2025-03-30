import usePatient from "../../hooks/usePatient";
import CheckboxInput from "../common/input/CheckboxInputProps";

function ProblemListForm() {
  const { patientData, updatePatientData } = usePatient();

  const problemOptions = [
    { name: "hypertension", label: "Hipertensão Arterial (HAS)" },
    { name: "diabetes", label: "Diabetes Mellitus (DM)" },
    { name: "tabagism", label: "Tabagismo" },
    { name: "NAFLD", label: "DHGNA" },
    { name: "CKD", label: "DRC" },
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
    <section className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-2">
      <h3 className="text-lg font-bold mb-4"> 📝 Lista de Problemas</h3>

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
    </section>
  );
}

export default ProblemListForm;
