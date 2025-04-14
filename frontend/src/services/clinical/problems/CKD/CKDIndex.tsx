import { usePatient } from "@/hooks";
import CKDEPIIndex from "../../calculator/CKDEPI/CKDEPIIndex";
import CKDStaging from "./CKDStaging";
import { usePatientStore } from "@/store/patient";

function CKDIndex() {
  const { patient, hasProblem } = usePatient();
  const hasCKD = hasProblem("CKD");
  const { getProblem } = usePatientStore();

  CDK = getProblem("CKD") ?? undefined;

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
