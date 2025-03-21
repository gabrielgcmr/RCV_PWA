import usePatient from "../../hooks/usePatient";
import CheckboxInput from "../common/input/CheckboxInputProps";

function ProblemListSection() {
  const { patientData, updateProblemList } = usePatient();

  const problemOptions = [
    { name: "hypertension", label: "Hipertensão Arterial (HAS)" },
    { name: "diabetes", label: "Diabetes Mellitus (DM)" },
    { name: "tabagism", label: "Tabagismo" },
    { name: "NAFLD", label: "DHGNA" },
    { name: "CKD", label: "DRC" },
  ];

  const handleProblemToggle = (problemName: string, checked: boolean) => {
    const updatedProblems = checked
      ? [...patientData.problemList.problems, { name: problemName, present: true }]
      : patientData.problemList.problems.filter((p) => p.name !== problemName);

    updateProblemList(updatedProblems);
  };

  const isProblemChecked = (problemName: string) =>
    patientData.problemList.problems.some((p) => p.name === problemName);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-2">
      <h2 className="text-lg font-bold mb-4"> 📝 Lista de Problemas</h2>

      {problemOptions.map(({ name, label }) => (
        <CheckboxInput
          key={name}
          id={name}
          name={name}
          label={label}
          checked={isProblemChecked(name)}
          onChange={handleProblemToggle}
        />
      ))}
    </div>
  );
}

export default ProblemListSection;
