import { usePatient } from "@/hooks";
import { examDictionary } from "@/constants/examDictionary";
import { summaryTitle } from "./styles";

export default function Exams() {
  const { patient } = usePatient();

  const categorizedExams: Record<string, string[]> = {};
  const validExams = patient.exams?.filter(
    (exam) => exam.value !== undefined && exam.value !== ""
  );

  validExams.forEach((exam) => {
    const def = examDictionary[exam.name];
    const category = def?.category || "Outros";
    const label = def?.abbreviation || exam.name;
    const formatted = `${label}: ${exam.value}`;
    if (!categorizedExams[category]) categorizedExams[category] = [];
    categorizedExams[category].push(formatted);
  });

  const hasExams = validExams.length > 0;

  const validDates = validExams
    .map((exam) => exam.date)
    .filter((d): d is string => !!d && d.length === 10);

  const latestDate = validDates.length
    ? new Date(Math.max(...validDates.map((d) => new Date(d).getTime())))
    : null;

  const examDate = latestDate ? latestDate.toLocaleDateString("pt-BR") : "?";

  return (
    <>
      <p className={summaryTitle}>
        🧪<b>EXAMES COMPLEMENTARES</b>
      </p>

      {hasExams ? (
        <div>
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
        </div>
      ) : (
        <ul className="list-disc pl-4">
          <li>Sem exames</li>
        </ul>
      )}
    </>
  );
}
