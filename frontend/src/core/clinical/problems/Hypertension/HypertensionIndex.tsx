import { usePatient } from "@/hooks";
import HypertensionStatusChecker from "./HypertensionStatus";

function HypertensionText() {
  const { patient, hasProblem } = usePatient();
  const hasHypertension = hasProblem("hypertension");

  if (!hasHypertension) return null;

  const SBP = Number(patient.physicalExam.systolicBP);
  const DBP = Number(patient.physicalExam.diastolicBP);
  const HypertensionStatus = HypertensionStatusChecker(SBP, DBP);

  return (
    <li>
      <strong>HAS</strong> {HypertensionStatus}
    </li>
  );
}

export default HypertensionText;
