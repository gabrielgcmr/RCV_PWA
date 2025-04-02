import usePatient from "../../../../hooks/usePatient";
import CKDEPIIndex from "../../../../services/clinical/calculator/CKD-EPI/CKDEPIIndex";
import CVRIndex from "../../../../services/clinical/calculator/CVR/CVRIndex";
import FIB4Text from "../../../../services/clinical/calculator/FIB4/FIB4Text";
import { summaryTitle } from "./styles";

export default function Preventions() {
  const { patient: patientData } = usePatient();
  const { CRVvalue, referenceValue, classification } = CVRIndex(patientData);
  const { value } = CKDEPIIndex(patientData);

  return (
    <>
      <p className={summaryTitle}>
        🟢 <b>PREVENÇÕES</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        {/* Exibe o risco cardiovascular */}
        {CRVvalue !== undefined && (
          <li>
            {" "}
            <b>RCV:</b> Risco Atual: {CRVvalue.toFixed(2)}% - ({classification})
            || Risco Ideal: {referenceValue.toFixed(2)}%{" "}
          </li>
        )}
        {/* Exibe a TFG se houver */}
        {CRVvalue !== undefined && (
          <li>
            <b>TFG: </b> {CRVvalue} mL/min/1.73m²
          </li>
        )}
        <FIB4Text />
      </ul>
    </>
  );
}
