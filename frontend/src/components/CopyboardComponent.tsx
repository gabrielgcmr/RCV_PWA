import { usePatient } from "../hooks/usePatient";

export default function ClipboadComponent() {
  const { patientData, findExam } = usePatient();
  const formatDate = (dateString: string) => {
    if (!dateString) return "Não informado"; // Caso a data esteja vazia
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Buscar exames
  const totalCholesterol = findExam("totalCholesterol");
  const ldlCholesterol = findExam("ldlCholesterol");
  const hdlCholesterol = findExam("hdlCholesterol");
  const triglycerides = findExam("triglycerides");
  const creatinine = findExam("creatinine");
  const urea = findExam("urea"); 
  const uricAcid = findExam("uricAcid");

  // Criar string dinâmica com exames disponíveis
  const bioquimicaExams = [
    totalCholesterol !== undefined ? `CT: ${totalCholesterol}` : "",
    hdlCholesterol !== undefined ? `HDL: ${hdlCholesterol}` : "",
    ldlCholesterol !== undefined ? `LDL: ${ldlCholesterol}` : "",
    triglycerides !== undefined ? `Trig: ${triglycerides}` : "",
    creatinine !== undefined ? `Cr: ${creatinine}` : "",
    urea !== undefined ? `Ur: ${urea}` : "",
    uricAcid !== undefined ? `Ac. Úrico: ${uricAcid}` : ""
  ]
    .filter(Boolean) // Remove os itens vazios
    .join("; "); // Junta os exames existentes em uma única string

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
            <p>LAB ({formatDate(patientData.complementaryExams.examsDate)}):{bioquimicaExams}</p>
        </li>
      </ul>
      
    </div>
  );
}
