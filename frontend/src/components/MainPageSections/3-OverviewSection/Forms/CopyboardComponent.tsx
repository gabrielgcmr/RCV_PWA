import { usePatient } from "../../../../hooks/usePatient";

export default function CopyboadComponent() {
  const { patientData } = usePatient();
  const formatDate = (dateString: string) => {
    if (!dateString) return "Não informado"; // Caso a data esteja vazia
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

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">🟢PREVENÇÕES E SEGMENTOS</h2>

      <p><strong>Tratando HAS:</strong> {patientData.lifeHabits.isTreatingHAS ? "Presente" : "Ausente"}</p>
      <p><strong>Diabetes:</strong> {patientData.lifeHabits.hasDiabetes ? "Presente" : "Ausente"}</p>
      <p><strong>Tabagismo:</strong> {patientData.lifeHabits.isSmoker ? "Presente" : "Ausente"}</p>
      <h3 className="font-bold mt-4">🧪EXAMES COMPLEMENTARES</h3>
      <ul>
        <li>
            <strong>Imagem:</strong>
        </li>
      </ul>
      <ul>
        <li>
            <strong>Bioquimica:</strong>
              <p>
              LAB ({formatDate(patientData.complementaryExams.examsDate)}):{" "}
              {bioquimicaExams || "Nenhum exame informado"}
              </p>
        </li>
      </ul>
      
    </div>
  );
}
