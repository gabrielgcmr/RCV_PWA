import { JSONContent } from "@tiptap/react";
import { ClinicalPatient } from "@/types";
import { mostCommonExams } from "@/constants";

/**
 * Gera a seção de Exames Complementares como JSONContent para o TipTap.
 */
export function examsJSON(
  patient: ClinicalPatient
): JSONContent {
  // Filtra exames válidos
  const validExams =
    patient.exams?.filter(
      (exam) => exam.value !== undefined && exam.value !== ""
    ) ?? [];
  const hasExams = validExams.length > 0;

  // Node de cabeçalho
  const headingNode = {
    type: "heading" as const,
    attrs: { level: 4 },
    content: [{ type: "text", text: "🧪 Exames complementares" }],
  };

  // Caso sem exames
  if (!hasExams) {
    const listItem = {
      type: "listItem" as const,
      content: [
        {
          type: "paragraph" as const,
          content: [{ type: "text", text: "Sem exames" }],
        },
      ],
    };

    return {
      type: "doc" as const,
      content: [headingNode, { type: "bulletList" as const, content: [listItem] }],
    };
  }

  // Agrupa por categoria
  const categorizedExams: Record<string, string[]> = {};
  validExams.forEach((exam) => {
    const def = mostCommonExams.find((d) => d.key === exam.key);
    const category = def?.category || "Outros";
    const label = def?.abbreviation || exam.label;
    const formatted = `${label}: ${exam.value}`;
    if (!categorizedExams[category]) categorizedExams[category] = [];
    categorizedExams[category].push(formatted);
  });

  // Calcula data mais recente
  const validDates = validExams
    .map((e) => e.date)
    .filter((d): d is string => !!d && d.length === 10);
  const latestTime =
    validDates.length > 0
      ? Math.max(...validDates.map((d) => new Date(d).getTime()))
      : null;
  const examDate = latestTime
    ? new Date(latestTime).toLocaleDateString("pt-BR")
    : "?";

  // Itens aninhados por categoria
  const nestedItems = Object.entries(categorizedExams).map(([, exams]) => ({
    type: "listItem" as const,
    content: [
      {
        type: "paragraph" as const,
        content: [{ type: "text", text: exams.join(" ; ") }],
      },
    ],
  }));

  // Lista principal com título de Bioquímica e lista aninhada
  const sectionListItem = {
    type: "listItem" as const,
    content: [
      {
        type: "paragraph" as const,
        content: [
          {
            type: "text" as const,
            text: `Bioquímica (${examDate}):`,
            marks: [{ type: "bold" as const }],
          },
        ],
      },
      {
        type: "bulletList" as const,
        content: nestedItems,
      },
    ],
  };

  return {
    type: "doc" as const,
    content: [
      headingNode,
      { type: "bulletList" as const, content: [sectionListItem] },
    ],
  };
}

export default examsJSON;
