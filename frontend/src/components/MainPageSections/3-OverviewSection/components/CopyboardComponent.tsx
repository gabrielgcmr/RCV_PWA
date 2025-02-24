import { usePatient } from "../../../../hooks/usePatient";
import { useMemo, useState } from "react";
import QuillEditor from "./ControledQuillEditor";


export default function CopyboardComponent() {
  const { patientData, hasProblem } = usePatient();
  const [notes, setNotes] = useState("");

  const { complementaryExams } = patientData || {};
  const { exams, date } = complementaryExams || {};

  const bioquimicaExams = useMemo(() => {
    if (!exams) return "";

    return exams
      .filter((exam) => exam.value !== undefined && exam.value !== "")
      .map((exam) => `${exam.abbreviation}: ${exam.value}`)
      .join("; ");
  }, [exams]);

  const examDate = useMemo(() => {
    return date instanceof Date ? date.toLocaleDateString("pt-BR") : "?";
  }, [date]);

  const labDataHtml = useMemo(() => {
    return `
      <ul>
        <li><strong>Imagem:</strong> Nenhuma imagem informada</li>
        <li><strong>Bioquímica:</strong> ${
          bioquimicaExams
            ? `<p>LAB (${examDate}): ${bioquimicaExams}</p>`
            : "Nenhum dado disponível"
        }</li>
      </ul>
    `;
  }, [bioquimicaExams, examDate]);

  const problems = [
    { id: "HAS", label: "HAS" },
    { id: "Diabetes", label: "Diabetes" },
    { id: "Tabagismo", label: "Tabagismo" },
  ];

  return (
    <div className="p-4 bg-zinc-100 text-black rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">🟢 PREVENÇÕES E SEGMENTOS</h2>

      {problems.map((problem) => (
        hasProblem(problem.id) && (
          <p key={problem.id}>
            <strong>{problem.label}:</strong> Presente
          </p>
        )
      ))}

      <h3 className="font-bold mt-4">🧪 EXAMES COMPLEMENTARES</h3>

      <QuillEditor value={labDataHtml} onChange={setNotes} />
    </div>
  );
}
