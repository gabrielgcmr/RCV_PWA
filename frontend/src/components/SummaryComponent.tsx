import { usePatient } from "../hooks/usePatient";
import { CardiovascularRiskIndex } from "../services/CardiovascularRisckCalculatorService/CardiovascularRiskIndex";

export default function SummaryComponent() {
  const { patientData, getExamValue } = usePatient();
  const getExamValueAsNumber = (name: string): number => {
    const value = getExamValue(name);
    
    if (typeof value === "number") {
      return value; // Já é um número, retorna direto
    }
    
    if (typeof value === "string") {
      const parsed = parseFloat(value);
      return isNaN(parsed) ? 0 : parsed; // Se for um número válido, retorna, senão retorna 0
    }
    
    return 0; // Se for undefined, retorna um valor padrão
  };

  const { realRisk, realRiskCategory, idealRisk } = CardiovascularRiskIndex.processRiskCalculation(patientData,getExamValueAsNumber);
  console.log(realRisk, realRiskCategory, idealRisk);
  
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

