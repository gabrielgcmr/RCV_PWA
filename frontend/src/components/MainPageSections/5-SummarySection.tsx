import  usePatient  from "../../hooks/usePatient";
import { calculateCKDEPIIndex } from "../../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import { calculateCVRIndex } from "../../services/ClinicalCalculations/CVR/CVRIndex";
import { calculateFIB4Index } from "../../services/ClinicalCalculations/FIB-4/FIB4Index";
import DiabetesIndex from "../../services/Problems/Diabetes/DiabetesIndex";
import HypertensionIndex from "../../services/Problems/Hypertension/HypertensionIndex";
import TabagismIndex from "../../services/Problems/Tabagism/Tabagism";

function SummarySection() {
  const { patientData, hasProblem } = usePatient();

  // Executa os cálculos diretamente
  const { CVRRealRisk, CVRIdealRisk, CVRcategory } = calculateCVRIndex(patientData);
  const { tfg } = calculateCKDEPIIndex(patientData);
  const { fib4, FIB4category } = calculateFIB4Index(patientData);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md mb-2">
      <h2 className="text-base font-bold mb-2">🛑LISTA DE PROBLEMAS</h2>

      {/* Exibe problemas de saúde */}
      
      <HypertensionIndex/>
      <DiabetesIndex/>
      <TabagismIndex/>
      
      {hasProblem("DHGNA") && <li><strong>DHGNA:</strong> Presente</li>}
      {hasProblem("DRC") && <li><strong>DRC:</strong> Presente</li>}

      {/* Exibe o risco cardiovascular */}
      {CVRRealRisk !== undefined && <p> <strong>RCV:</strong> Risco Atual: {CVRRealRisk.toFixed(2)}% - ({CVRcategory}) || Risco Ideal: {CVRIdealRisk.toFixed(2)}% </p>}

      {/* Exibe a TFG se houver */}
      {tfg !== undefined && <p><strong>TFG: </strong> {tfg} mL/min/1.73m²</p>}

      {/* Exibe o FIB-4 se houver */}
      {fib4 !== undefined && <p><strong>FIB4: </strong>{fib4} pontos - Estadiamento de Fibrose estimado: {FIB4category} </p>}
    </div>
  );
}

export default SummarySection