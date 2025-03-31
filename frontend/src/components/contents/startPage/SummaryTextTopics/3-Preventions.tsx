import usePatient from "../../../../hooks/usePatient";
import calculateCKDEPIIndex from "../../../../services/clinical/calculator/CKD-EPI/CKDEPIIndex";
import calculateCVRIndex from "../../../../services/clinical/calculator/CVR/CVRIndex";
import calculateFIB4Index from "../../../../services/clinical/calculator/FIB-4/FIB4Index";
import { summaryTitle } from "./styles";

export default function Preventions() {
  const { patientData } = usePatient();
  const { CVRRealRisk, CVRIdealRisk, CVRcategory } =
    calculateCVRIndex(patientData);
  const { eGFR } = calculateCKDEPIIndex(patientData);
  const { fib4, fib4category } = calculateFIB4Index(patientData);

  return (
    <>
      <p className={summaryTitle}>
        🟢 <b>PREVENÇÕES</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        {/* Exibe o risco cardiovascular */}
        {CVRRealRisk !== undefined && (
          <li>
            {" "}
            <b>RCV:</b> Risco Atual: {CVRRealRisk.toFixed(2)}% - ({CVRcategory})
            || Risco Ideal: {CVRIdealRisk.toFixed(2)}%{" "}
          </li>
        )}
        {/* Exibe a TFG se houver */}
        {eGFR !== undefined && (
          <li>
            <b>TFG: </b> {eGFR} mL/min/1.73m²
          </li>
        )}
        {/* Exibe o FIB-4 se houver */}
        {fib4 !== undefined && (
          <li>
            <b>FIB4: </b>
            {fib4} pontos - Estadiamento de Fibrose estimado:{" "}
            {fib4category}{" "}
          </li>
        )}
      </ul>
    </>
  );
}
