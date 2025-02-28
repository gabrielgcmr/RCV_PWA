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
  const { tfg: TGF, errors } =
    CKDEPIIndex.calculateTFG(patientData, (name) => getExamValueAsNumber(getExamValue, name));

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">📋 Resumo do Paciente</h2>

      {/* Exibe problemas de saúde */}
      {hasProblem("HAS") && <p><strong>HAS:</strong> Presente</p>}
      {hasProblem("Diabetes") && <p><strong>Diabetes:</strong> Presente</p>}
      {hasProblem("Tabagismo") && <p><strong>Tabagismo:</strong> Presente</p>}

      {/* Exibe o risco cardiovascular */}
      <p>
        <strong>RCV: </strong>
        {realRisk
          ? `Risco Real ${realRisk.toFixed(2)}% - (${realRiskCategory} || Risco Ideal ${idealRisk.toFixed(2)}%)`
          : "Não avaliado"}
      </p>

      {/* Exibe a TFG e erros, se houver */}
      <p><strong>TFG: </strong>{TGF !== null ? `${TGF} mL/min/1.73m²` : "Não avaliada"}</p>

      {errors.length > 0 && (
        <div className="mt-4 p-2 bg-red-200 text-red-700 rounded">
          <p><strong>Erros ao calcular TFG:</strong></p>
          <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
