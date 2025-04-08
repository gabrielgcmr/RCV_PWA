import { usePatient } from "@/hooks";
import CKDEPIIndex from "../../calculator/CKD-EPI/CKDEPIIndex";
import CKDStaging from "./CKDStaging";

function CKDIndex() {
  const { patient, hasProblem } = usePatient();
  const hasCKD = hasProblem("CKD");

  if (!hasCKD) return null;

  const { value } = CKDEPIIndex(patient);
  const tfg = Number(value);

  const UACR = Number(
    patient.exams.find((exam) => exam.name === "UACR")?.value ?? undefined
  );

  const stage = CKDStaging(tfg, UACR);

  return (
    <li>
      <strong>DRC </strong>
      {stage ? `(${stage})` : " Sem TFG!"}
    </li>
  );
}

export default CKDIndex;
