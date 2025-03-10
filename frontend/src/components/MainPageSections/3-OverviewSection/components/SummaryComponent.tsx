import { usePatient } from "../../../../hooks/usePatient";
import { CKDEPIIndex } from "../../../../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import { CVRIndex } from "../../../../services/ClinicalCalculations/CVR/CVRIndex";
import { FIB4Index } from "../../../../services/ClinicalCalculations/FIB-4/FIB4Index";
import { getExamValueAsNumber } from "../../../../utils/examUtils";


export default function SummaryComponent() {
  const { patientData, getExamValue, hasProblem } = usePatient();

const { realRisk, realRiskCategory, idealRisk, errors } =
  CVRIndex.calculateRCV(
    patientData,
    (name) => getExamValueAsNumber(getExamValue, name)
  );

console.log("Resultado de calculateRCV:", { realRisk, realRiskCategory, idealRisk, errors });


  // Cálculo da TFG usando o getExamValueAsNumber para garantir números
  const {tfg:TGF}  =
    CKDEPIIndex.calculateTFG(patientData, (name) => getExamValueAsNumber(getExamValue, name));

  const {fib4: FIB4} = 
    FIB4Index.calculateFIB4(patientData,(name) => getExamValueAsNumber(getExamValue, name))

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
      {FIB4 !== null? <p><strong>FIB4: </strong>{FIB4} pontos</p>: ""}
    </div>
  );
}
