import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../../styles/quill-overrides.css"
import usePatient from "../../hooks/usePatient";
import { examDictionary } from "../../constants/examDictionary";
import getAllergiesText from "../../services/medicalText/allergiesSection.";


function QuillEditor() {
  const { patientData } = usePatient();
  const quillRef = useRef<Quill | null>(null);
  const editorContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!editorContainerRef.current) return;

    // Inicializa o editor Quill se ainda não existir
    if (!quillRef.current) {
      quillRef.current = new Quill(editorContainerRef.current, {
        theme: "snow",
        modules: {
          toolbar: true, // Oculta a barra de ferramentas
        },
      });
    }

    if (!patientData?.complementaryExams?.exams) return;

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

    // Monta o conteúdo do editor
    let quillContent = getAllergiesText()
    quillContent += `
    <h3><strong>LISTA DE PROBLEMAS</strong></h3>  
        <ul>
        <li>HAS: Presente</li>
        <li>DM: Presente</li>
        <li>Tabagismo: Presente</li>
        <li>DRC: G2</li>
        <li>DHGNA</li>
        </ul>
    `;
    quillContent += `
      <h3><strong>PREVENÇÕES E SEGMENTOS</strong> </h3>`;
    quillContent += `<p><strong>Imagem:</strong> Nenhum</p>`;
    quillContent += `<li>Nenhum</li>`;

    quillContent += `
      <h3><strong> EXAMES COMPLEMENTARES </strong> </h3>`;
    quillContent += `<p><strong>Imagem:</strong> Nenhum</p>`;
    quillContent += `<li>Nenhum</li>`;

    if (hasExams) {
      quillContent += `<li><strong>Bioquímica:</strong></li>`;
      quillContent += `<p><strong>Lab (${examDate}):</strong></p>`;

      Object.entries(categorizedExams).forEach(([category, exams]) => {
        quillContent += `<li><strong>${category}:</strong> ${exams.join(" / ")}</li>`;
      });
    }

    // Atualiza o conteúdo do editor Quill
    quillRef.current.clipboard.dangerouslyPasteHTML(quillContent);
  }, [patientData]);

  return (
    <div className="p-2 bg-zinc-200 rounded-lg shadow-md">
      <div ref={editorContainerRef} className="quill-container" />
    </div>
  );
}

export default QuillEditor;
