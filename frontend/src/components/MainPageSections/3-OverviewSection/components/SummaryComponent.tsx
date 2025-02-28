import { usePatient } from "../../../../hooks/usePatient";
import { CardiovascularRiskIndex } from "../../../../services/CardiovascularRisckCalculatorService/CardiovascularRiskIndex";
import { CKDEPIIndex } from "../../../../services/CKD-EPI/CKDEPIIndex";
import { getExamValueAsNumber } from "../../../../utils/examUtils";

export default function SummaryComponent() {
  const { patientData, getExamValue, hasProblem } = usePatient();

  const { realRisk, realRiskCategory, idealRisk } =
    CardiovascularRiskIndex.processRiskCalculation(
      patientData,
      (name) => getExamValueAsNumber(getExamValue, name) // Usa a função utilitária
    );

  // Cálculo da TFG usando o getExamValueAsNumber para garantir números
  const { tfg: TGF } =
    CKDEPIIndex.calculateTFG(patientData, (name) => getExamValueAsNumber(getExamValue, name));

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">📋 Resumo do Paciente</h2>

      {/* Exibe problemas de saúde */}
      {hasProblem("HAS") && <p><strong>HAS:</strong> Presente</p>}
      {hasProblem("Diabetes") && <p><strong>Diabetes:</strong> Presente</p>}
      {hasProblem("Tabagismo") && <p><strong>Tabagismo:</strong> Presente</p>}

      {/* Exibe o risco cardiovascular */}
      {realRisk ? <p><strong>RCV:</strong> Risco Atual: {realRisk.toFixed(2)}% - ({realRiskCategory}) || Risco Ideal: {idealRisk.toFixed(2)}%</p>: ""}
      {/* Exibe a TFG se houver */}
      {TGF !== null? <p><strong>TFG: </strong> {TGF} mL/min/1.73m² </p> : "" }
    </div>
  );
}
