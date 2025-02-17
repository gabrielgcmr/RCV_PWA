import { usePatient } from "../context/usePatient";

export default function SummaryComponent() {
  const { patientData } = usePatient();
  const findExam = (name: string) => {
    return patientData.complementaryExams.exams.find(exam => exam.name === name)?.value || "Não informado";
    }

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">📋 Resumo do Paciente</h2>
      <p><strong>Nome:</strong> {patientData.identification.name || "Não informado"}</p>
      <p><strong>Idade:</strong> {patientData.identification.age || "Não informado"}</p>
      <p><strong>Gênero:</strong> {patientData.identification.gender || "Não informado"}</p>
      <p><strong>Raça:</strong> {patientData.identification.race || "Não informado"}</p>
      <h3 className="font-bold mt-4">🩺 Exame Físico</h3>
      <p><strong>Pressão Sistólica:</strong> {patientData.physicalExam.systolicBP || "Não informado"} mmHg</p>
      <p><strong>Pressão Diastólica:</strong> {patientData.physicalExam.diastolicBP || "Não informado"} mmHg</p>
      <h3 className="font-bold mt-4">💡 Hábitos de Vida</h3>
      <p><strong>Tratando HAS:</strong> {patientData.lifeHabits.isTreatingHAS ? "Sim" : "Não"}</p>
      <p><strong>Diabetes:</strong> {patientData.lifeHabits.hasDiabetes ? "Sim" : "Não"}</p>
      <p><strong>Tabagismo:</strong> {patientData.lifeHabits.isSmoker ? "Sim" : "Não"}</p>
      <h3 className="font-bold mt-4">🩺 Perfil Lipídico</h3>
      <p><strong>Colesterol Total:</strong> {findExam("totalCholesterol") || ""} </p>
      <p><strong>LDL:</strong> {findExam("ldlCholesterol") || ""}</p>
      <p><strong>HDL:</strong> {findExam("hdlCholesterol") || ""} </p>
      <p><strong>Triglicerídeos:</strong> {findExam("triglycerides") || ""} </p>
    </div>
  );
}  

