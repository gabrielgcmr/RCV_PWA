import { examDictionary } from "../../constants/examDictionary";
import usePatient from "../../hooks/usePatient";

function ClipboardSection() {
  const { patientData } = usePatient();

  if (!patientData?.complementaryExams?.exams) return null;

  // Criar um mapeamento reverso de abbreviations para categories
  const abbreviationToCategory: Record<string, string> = Object.values(examDictionary).reduce(
    (acc, exam) => {
      acc[exam.abbreviation] = exam.category;
      return acc;
    },
    {} as Record<string, string>
  );

  // Agrupar os exames por categoria
  const categorizedExams: Record<string, string[]> = {};

  patientData.complementaryExams.exams.forEach((exam) => {
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
    patientData.complementaryExams.date instanceof Date
      ? patientData.complementaryExams.date.toLocaleDateString("pt-BR")
      : "?";

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h3 className="text-lg font-bold gap-2">🧪 EXAMES COMPLEMENTARES</h3>
        <li>
          <strong>Imagem:</strong> Nenhum
        </li>
      <li>
      {hasExams && (
        <>
          <strong>Bioquímica:</strong>
          <li className="font-semibold">Lab: {examDate}</li>
          {Object.entries(categorizedExams).map(([, exams]) => (
              <li>{exams.join("; ")}</li>
          ))}
        </>
      )}
    </li>  
    </div>
  );
}

export default ClipboardSection;
