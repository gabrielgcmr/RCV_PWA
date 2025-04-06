import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";

const problemOptions = [
  { name: "hypertension", label: "HAS" },
  { name: "diabetes", label: "DM" },
  { name: "dyslipidemia", label: "Dislipidemia" },
  { name: "tabagism", label: "Tabagismo" },
  { name: "dyspepsia", label: "Dispepsia" },
  { name: "hypothyroidism", label: "Hipotireoidismo" },
  { name: "osteoarthritis", label: "Osteoartrite" },
  { name: "NAFLD", label: "DHGNA" },
  { name: "CKD", label: "DRC" },
  { name: "migrane", label: "Migrânea" },
  {
    name: "peripheralArteryDisease",
    label: "Doença Arterial Periférica (DAP)",
  },
  {
    name: "chronicVenousInsufficiency (CVI)",
    label: "Insuficiencia Venosa Crônica (IVC)",
  },
  { name: "dementia", label: "Demência" },
  { name: "chronicPain", label: "Dor Crônica" },
  { name: "COPD", label: "DPOC" },
  { name: "asthma", label: "Asma" },
  { name: "heartFailure", label: "Insuficiência Cardíaca (IC)" },
  { name: "arrhythmia", label: "Arritmia" },
  { name: "CAD", label: "DAC" },
  { name: "obesity", label: "Obesidade" },
  { name: "depression", label: "Depressão" },
  { name: "anxiety", label: "Ansiedade" },
];

function ProblemListForm() {
  const { hasProblem, toggleProblem } = usePatient();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleProblem(name, !hasProblem(name));
    }
  };

  return (
    <SectionBase title="Lista de Problemas" icon="📋" id="problemList">
      <div className="max-h-50 overflow-y-auto pr-2">
        {" "}
        {/* 👈 Define altura máxima com rolagem */}
        <form>
          {problemOptions.map(({ name, label }) => (
            <div key={name} className="flex items-center">
              <input
                type="checkbox"
                id={name}
                value={name}
                checked={hasProblem(name)}
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
    </SectionBase>
  );
}

export default ProblemListForm;
