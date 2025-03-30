import usePatient from "../../hooks/usePatient";
import calculateCKDEPIIndex from "../../services/ClinicalCalculations/CKD-EPI/CKDEPIIndex";
import calculateCVRIndex from "../../services/ClinicalCalculations/CVR/CVRIndex";
import calculateFIB4Index from "../../services/ClinicalCalculations/FIB-4/FIB4Index";


export default function Preventions() {
  const { patientData } = usePatient();
  const { CVRRealRisk, CVRIdealRisk, CVRcategory } = calculateCVRIndex(patientData);
  const { eGFR } = calculateCKDEPIIndex(patientData);
  const { fib4, fib4category } = calculateFIB4Index(patientData);
  
  return (
    <>
      <p className="text-base font-bold mb-2 mt-2">
        🟢 <strong>PREVENÇÕES</strong>{" "}
      </p>
      <ul className="list-disc pl-4">
        {/* Exibe o risco cardiovascular */}
      {CVRRealRisk !== undefined && <li> <strong>RCV:</strong> Risco Atual: {CVRRealRisk.toFixed(2)}% - ({CVRcategory}) || Risco Ideal: {CVRIdealRisk.toFixed(2)}% </li>}
      {/* Exibe a TFG se houver */}
      {eGFR !== undefined && <li><strong>TFG: </strong> {eGFR} mL/min/1.73m²</li>}
      {/* Exibe o FIB-4 se houver */}
      {fib4 !== undefined && <li><strong>FIB4: </strong>{fib4} pontos - Estadiamento de Fibrose estimado: {fib4category} </li>}
      </ul>
    </>
  );
}
