import { usePatient } from "../../../../hooks/usePatient";
import { examDictionary } from "../../../common/constants/examDictionary"; // Importando para validação

export default function CopyboadComponent() {
  const { patientData, hasProblem } = usePatient();

  // 🔹 Função para filtrar apenas os exames laboratoriais
  const findExamWithAbbreviation = () => {
    if (!patientData?.complementaryExams?.exams) return "";

    return patientData.complementaryExams.exams
      .filter(
        (exam) =>
          exam.value !== undefined && exam.value !== "" && examDictionary[exam.name] // 🔹 Garante que o exame está no dicionário
      )
      .map((exam) => `${exam.abbreviation}: ${exam.value}`)
      .join("; ");
  };

  const bioquimicaExams = findExamWithAbbreviation();
  const shouldShowLabData = bioquimicaExams;

  // 🔹 Verifica se a data é uma instância válida de Date
  const examDate =
    patientData.complementaryExams.date instanceof Date
      ? patientData.complementaryExams.date.toLocaleDateString("pt-BR")
      : "?";

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">🟢 PREVENÇÕES E SEGMENTOS</h2>

      {/* Lista de Problemas */}
      {hasProblem("HAS") && <p><strong>HAS:</strong> Presente</p>}
      {hasProblem("Diabetes") && <p><strong>Diabetes:</strong> Presente</p>}
      {hasProblem("Tabagismo") && <p><strong>Tabagismo:</strong> Presente</p>}

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
              LAB ({examDate}): {bioquimicaExams}
            </p>
          )}
        </li>
      </ul>
    </div>
  );
}
