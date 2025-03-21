import usePatient  from "../../hooks/usePatient";
import calculateCKDEPIIndex  from "../../services/clinicalCalculations/CKD-EPI/CKDEPIIndex";
import calculateCVRIndex from "../../services/clinicalCalculations/CVR/CVRIndex";
import calculateFIB4Index from "../../services/clinicalCalculations/FIB-4/FIB4Index";
import CKDIndex from "../../services/problems/CKD/CKDIndex";
import DiabetesIndex from "../../services/problems/diabetes/DiabetesIndex";
import HypertensionIndex from "../../services/problems/Hypertension/HypertensionIndex";
import NAFLDIndex from "../../services/problems/NAFLD/NAFLD";
import TabagismIndex from "../../services/problems/Tabagism/Tabagism";

function SummarySection() {
  const { patientData } = usePatient();

  // Executa os cálculos diretamente
  const { CVRRealRisk, CVRIdealRisk, CVRcategory } = calculateCVRIndex(patientData);
  const { eGFR } = calculateCKDEPIIndex(patientData);
  const { fib4, fib4category } = calculateFIB4Index(patientData);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md mb-2">
      <h3 className="text-base font-bold mb-2">🛑LISTA DE PROBLEMAS</h3>
      {/* Exibe problemas de saúde */}
      <HypertensionIndex/>
      <DiabetesIndex/>
      <TabagismIndex/>
      <CKDIndex/>
      <NAFLDIndex/>

      <p className="mt-2"></p>
      <h3 className="text-base font-bold mb-2">🟢PREVENÇÕES E SEGMENTOS</h3>
      {/* Exibe o risco cardiovascular */}
      {CVRRealRisk !== undefined && <li> <strong>RCV:</strong> Risco Atual: {CVRRealRisk.toFixed(2)}% - ({CVRcategory}) || Risco Ideal: {CVRIdealRisk.toFixed(2)}% </li>}
      {/* Exibe a TFG se houver */}
      {eGFR !== undefined && <li><strong>TFG: </strong> {eGFR} mL/min/1.73m²</li>}
      {/* Exibe o FIB-4 se houver */}
      {fib4 !== undefined && <li><strong>FIB4: </strong>{fib4} pontos - Estadiamento de Fibrose estimado: {fib4category} </li>}
    </div>
  );
}

export default SummarySection