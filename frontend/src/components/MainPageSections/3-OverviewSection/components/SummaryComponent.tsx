import { usePatient } from "../../../../hooks/usePatient";
import { calculateTFG } from "../../../../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import { calculateCVRIndex } from "../../../../services/ClinicalCalculations/CVR/CVRIndex";
import { calculateFIB4Index } from "../../../../services/ClinicalCalculations/FIB-4/FIB4Index";

export default function SummaryComponent() {
  const { patientData, hasProblem } = usePatient();

  // Executa os cálculos diretamente
  const { realRisk, realRiskCategory, idealRisk } = calculateCVRIndex(patientData);
  const { tfg } = calculateTFG(patientData);
  const { fib4 } = calculateFIB4Index(patientData);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">📋 Resumo do Paciente</h2>

      {/* Exibe problemas de saúde */}
      {hasProblem("HAS") && <p><strong>HAS:</strong> Presente</p>}
      {hasProblem("Diabetes") && <p><strong>Diabetes:</strong> Presente</p>}
      {hasProblem("Tabagismo") && <p><strong>Tabagismo:</strong> Presente</p>}
      
      {/* Exibe o risco cardiovascular */}
      {realRisk !== null && (
        <p>
          <strong>RCV:</strong> Risco Atual: {realRisk.toFixed(2)}% - ({realRiskCategory}) || 
          Risco Ideal: {idealRisk.toFixed(2)}%
        </p>
      )}

      {/* Exibe a TFG se houver */}
      {tfg !== null && <p><strong>TFG: </strong> {tfg} mL/min/1.73m²</p>}

      {/* Exibe o FIB-4 se houver */}
      {fib4 !== null && <p><strong>FIB4: </strong>{fib4} pontos</p>}
    </div>
  );
}
