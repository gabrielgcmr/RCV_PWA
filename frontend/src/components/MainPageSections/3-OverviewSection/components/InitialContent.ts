import { IExam } from "../../../../interfaces/IExam";

// utils/formatLabData.ts
export function InitialContent(exams: IExam[] = [], date: Date): string {
  const bioquimicaExams = exams
    .filter((exam) => exam.value !== undefined && exam.value !== "")
    .map((exam) => `${exam.abbreviation}: ${exam.value}`)
    .join("; ");

  const examDate =
    date instanceof Date
      ? date.toLocaleDateString("pt-BR")
      : new Date(date).toLocaleDateString("pt-BR") || "?";

  return `
    <h3 class="font-bold mt-4"># EXAMES COMPLEMENTARES</h3>  
    <ul>
      <li><strong>Imagem:</strong> Nenhuma imagem informada</li>
      <li><strong>Bioquímica:</strong> ${
        bioquimicaExams ? `<p>LAB (${examDate}): ${bioquimicaExams}</p>` : "Nenhum dado disponível"
      }</li>
    </ul>
  `;
}
