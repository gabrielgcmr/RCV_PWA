import usePatient from "../../../../hooks/usePatient";
import CKDEPIIndex from "../../../../services/clinical/calculator/CKD-EPI/CKDEPIIndex";
import CVRIndex from "../../../../services/clinical/calculator/CVR/CVRIndex";
import FIB4Index from "../../../../services/clinical/calculator/FIB4/FIB4Index";
import { summaryTitle } from "./styles";

export default function Preventions() {
  const { patient } = usePatient();
  const hasAnyPrevention = patient.preventionList.prevention.length > 0;
  const cvr = CVRIndex(patient);
  const tfg = CKDEPIIndex(patient);
  const fib4 = FIB4Index(patient);

  return (
    <>
      <p className={summaryTitle}>
        ✅ <b>PREVENÇÕES</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        {hasAnyPrevention ? (
          <>
            <li>
              <strong>{cvr.abbreviation}</strong>: {cvr.description}
            </li>
            <li>
              <strong>{tfg.abbreviation}</strong>: {tfg.description}
            </li>
            <li>
              <strong>{fib4.abbreviation}</strong>: {fib4.description}
            </li>
          </>
        ) : (
          <li>Sem prevenções</li>
        )}
      </ul>
    </>
  );
}
