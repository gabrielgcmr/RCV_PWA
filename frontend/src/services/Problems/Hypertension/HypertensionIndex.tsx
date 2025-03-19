import usePatient from "../../../hooks/usePatient";
import HypertensionStatusChecker from "./HypertensionStatus";

function HypertensionIndex(){
  const { patientData, hasProblem } = usePatient();
  const hasHypertension=hasProblem("hypertension")

  if (!hasHypertension) return null;

  const SBP = Number(patientData.physicalExam.systolicBP)
  const DBP = Number(patientData.physicalExam.diastolicBP)
  const HypertensionStatus = HypertensionStatusChecker (SBP,DBP )

  return (
    <li><strong>HAS</strong> {HypertensionStatus}</li>
  )
}

export default HypertensionIndex