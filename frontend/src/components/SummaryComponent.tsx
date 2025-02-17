import { usePatient } from "../hooks/usePatient";
import { CardiovascularRiskIndex } from "../services/CardiovascularRisckCalculatorService/CardiovascularRiskIndex";

export default function SummaryComponent() {
  const { patientData } = usePatient();
  
  const isPatientDataValid =
    patientData &&
    patientData.identification?.age &&
    patientData.physicalExam?.systolicBP &&
    patientData.complementaryExams?.exams.find((exam) => exam.name === "Colesterol Total")?.value &&
    patientData.complementaryExams?.exams.find((exam) => exam.name === "HDL")?.value &&
    ["Masculino", "Feminino"].includes(patientData.identification?.gender) &&
    patientData.identification?.race;


  const { realRisk, realRiskCategory, idealRisk } = CardiovascularRiskIndex.processRiskCalculation(patientData);
  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">📋 Resumo do Paciente</h2>
      <p><strong>HAS:</strong> {patientData.lifeHabits.isTreatingHAS ? "Presente" : "Ausente"}</p>
      <p><strong>DM:</strong> {patientData.lifeHabits.hasDiabetes ? "Presente" : "Ausente"}</p>
      <p>
        <strong>RCV:</strong> Risco Real {realRisk ? `${realRisk.toFixed(2)}% - (${realRiskCategory})` : "Não avaliado"} | 
        Ideal: {idealRisk ? `${idealRisk.toFixed(2)}%` : "Não avaliado"}
        </p>
    </div>
  );
}  

