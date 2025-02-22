import { usePatient } from "../../../../hooks/usePatient";

export default function CopyboadComponent() {
  const { patientData, hasProblem } = usePatient();

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const findExamWithAbbreviation = () => {
    if (!patientData?.complementaryExams?.exams) return "";

    return patientData.complementaryExams.exams
      .filter((exam) => exam.value !== undefined && exam.value !== "")
      .map((exam) => `${exam.abbreviation}: ${exam.value}`)
      .join("; ");
  };

  const bioquimicaExams = findExamWithAbbreviation();
  const shouldShowLabData = bioquimicaExams;

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">🟢 PREVENÇÕES E SEGMENTOS</h2>

      <p>
        <strong>HAS:</strong> {hasProblem("HAS") ? "Presente" : "Ausente"}
      </p>
      <p>
        <strong>Diabetes:</strong> {hasProblem("Diabetes") ? "Presente" : "Ausente"}
      </p>
      <p>
        <strong>Tabagismo:</strong> {hasProblem("Tabagismo") ? "Presente" : "Ausente"}
      </p>

      <h3 className="font-bold mt-4">🧪 EXAMES COMPLEMENTARES</h3>
      <ul>
        <li>
          <strong>Imagem:</strong> Nenhuma imagem informada
        </li>
      </ul>
      <ul>
        <li>
          <strong>Bioquímica:</strong>
          {shouldShowLabData && (
            <p>
              LAB ({formatDate(patientData.complementaryExams.examsDate)}):{" "}
              {bioquimicaExams}
            </p>
          )}
        </li>
      </ul>
    </div>
  );
}
