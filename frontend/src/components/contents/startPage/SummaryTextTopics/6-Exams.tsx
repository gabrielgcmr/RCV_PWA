import { examDictionary } from "../../../../constants/examDictionary";
import usePatient from "../../../../hooks/usePatient";
import { summaryTitle } from "./styles";

export default function Exams() {
  const { patient } = usePatient();

  if (!patient?.complementaryExams?.exams) return null;

  // Criar um mapeamento reverso de abbreviations para categories
  const abbreviationToCategory: Record<string, string> = Object.values(
    examDictionary
  ).reduce(
    (acc, exam) => {
      acc[exam.abbreviation] = exam.category;
      return acc;
    },
    {} as Record<string, string>
  );

  // Agrupar os exames por categoria
  const categorizedExams: Record<string, string[]> = {};

  patient.complementaryExams.exams.forEach((exam) => {
    if (exam.value !== undefined && exam.value !== "" && exam.abbreviation) {
      const category = abbreviationToCategory[exam.abbreviation] || "Outros";
      const formattedExam = `${exam.abbreviation}: ${exam.value}`;

      if (!categorizedExams[category]) {
        categorizedExams[category] = [];
      }
      categorizedExams[category].push(formattedExam);
    }
  });

  // Verifica se há exames a serem exibidos
  const hasExams = Object.keys(categorizedExams).length > 0;

  // Verifica se a data é válida
  const examDate =
    patient.complementaryExams.date instanceof Date
      ? patient.complementaryExams.date.toLocaleDateString("pt-BR")
      : "?";

  return (
    <>
      <p className={summaryTitle}>
        🟣 <b>EXAMES COMPLEMENTARES</b>
      </p>

      {hasExams ? (
        <div className="mt-2">
          {hasExams && (
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <strong>Bioquímica ({examDate}):</strong>
                <ul className="list-disc pl-6">
                  {Object.entries(categorizedExams).map(([category, exams]) => (
                    <li key={category}>{exams.join(" ; ")}</li>
                  ))}
                </ul>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <li>Sem exames</li>
      )}
    </>
  );
}
