import { useState } from "react";
import { usePatient } from "../../../hooks/usePatient";
import { CKDEPIIndex } from "../../../services/CKD-EPI/CKDEPIIndex";
import { CardiovascularRiskIndex } from "../../../services/CardiovascularRisckCalculatorService/CardiovascularRiskIndex";
import { getExamValueAsNumber } from "../../../utils/examUtils";


export default function ClinicalCalculations() {
  const { patientData, getExamValue } = usePatient();
  const [tfg, setTfg] = useState<string | null>(null);
  const [cvRisk, setCvRisk] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  // Função para calcular a TFG (Taxa de Filtração Glomerular)
  const handleCalculateTFG = () => {
    const { tfg, errors } = CKDEPIIndex.calculateTFG(patientData, (name: string) => getExamValueAsNumber(getExamValue, name));
    setTfg(tfg !== null ? `${tfg} mL/min/1.73m²` : "Não avaliada");
    setErrors(errors);
  };

  // Função para calcular o Risco Cardiovascular
  const handleCalculateRisk = () => {
    const { realRisk, realRiskCategory, idealRisk } =
      CardiovascularRiskIndex.processRiskCalculation(patientData, (name:string) => getExamValueAsNumber(getExamValue, name));

    setCvRisk(realRisk
      ? `RCV: ${realRisk.toFixed(2)}% (${realRiskCategory}) | Ideal: ${idealRisk.toFixed(2)}%`
      : "Não avaliado"
    );
  };

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md w-48 flex flex-col gap-2">
      <h2 className="text-sm font-bold text-white mb-2">📊 Cálculos Clínicos</h2>

      {/* Botões para acionar cálculos */}
      <button
        onClick={handleCalculateTFG}
        className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Calcular TFG
      </button>

      <button
        onClick={handleCalculateRisk}
        className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Calcular RCV
      </button>

      {/* Exibição dos resultados */}
      {tfg && <p className="text-xs text-white mt-2"><strong>TFG:</strong> {tfg}</p>}
      {cvRisk && <p className="text-xs text-white mt-2"><strong>RCV:</strong> {cvRisk}</p>}

      {/* Exibição de erros */}
      {errors.length > 0 && (
        <div className="mt-2 p-2 bg-red-200 text-red-700 text-xs rounded">
          <p><strong>Erro:</strong></p>
          <ul>{errors.map((err, index) => <li key={index}>{err}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
