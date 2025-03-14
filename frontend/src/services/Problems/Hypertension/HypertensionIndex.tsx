import usePatient from "../../../hooks/usePatient";
import HypertensionStatusChecker from "./HypertensionStatus";

function HypertensionIndex(){
  const { patientData, hasProblem } = usePatient();
  const hasHypertension=hasProblem("HAS")

  if (!hasHypertension) return null;

  const SBP = Number(patientData.physicalExam.systolicBP)
  const DBP = Number(patientData.physicalExam.diastolicBP)
  const HypertensionStatus = HypertensionStatusChecker (SBP,DBP )

  return (
    <li><strong>HAS:</strong> Presente {HypertensionStatus}</li>
  )
}

export default HypertensionIndex