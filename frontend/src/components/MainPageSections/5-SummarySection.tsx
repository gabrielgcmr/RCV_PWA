import usePatient  from "../../hooks/usePatient";
import calculateCKDEPIIndex  from "../../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import calculateCVRIndex from "../../services/ClinicalCalculations/CVR/CVRIndex";
import calculateFIB4Index from "../../services/ClinicalCalculations/FIB-4/FIB4Index";
import CKDIndex from "../../services/Problems/CKD/CKDIndex";
import DiabetesIndex from "../../services/Problems/Diabetes/DiabetesIndex";
import HypertensionIndex from "../../services/Problems/Hypertension/HypertensionIndex";
import NAFLDIndex from "../../services/Problems/NAFLD/NAFLD";
import TabagismIndex from "../../services/Problems/Tabagism/Tabagism";

function SummarySection() {
  const { patientData } = usePatient();

  // Executa os cálculos diretamente
  const { CVRRealRisk, CVRIdealRisk, CVRcategory } = calculateCVRIndex(patientData);
  const { eGFR } = calculateCKDEPIIndex(patientData);
  const { fib4, fib4category } = calculateFIB4Index(patientData);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md mb-2">
      <p className="text-base font-bold mb-2">🛑<strong>LISTA DE PROBLEMAS</strong></p>

      {/* Exibe problemas de saúde */}
      <HypertensionIndex/>
      <DiabetesIndex/>
      <TabagismIndex/>
      <CKDIndex/>
      <NAFLDIndex/>

      <p className="mt-2"></p>
      <p className="text-base font-bold mb-2">🟢<strong>PREVENÇÕES E SEGUIMENTOS</strong></p>
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
