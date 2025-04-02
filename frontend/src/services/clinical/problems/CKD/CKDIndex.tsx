import usePatient from "../../../../hooks/usePatient";
import CKDEPIIndex from "../../calculator/CKD-EPI/CKDEPIIndex";
import CKDStaging from "./CKDStaging";

function CKDIndex() {
  const { patient: patientData, hasProblem } = usePatient();
  const hasCKD = hasProblem("CKD");
  const { eGFR } = CKDEPIIndex(patientData);
  const UACR = Number(
    patientData.complementaryExams.exams.find((exam) => exam.name === "UACR")
      ?.value ?? undefined
  );

  if (!hasCKD) return null;
  if (eGFR !== undefined) {
    const stage = CKDStaging(eGFR, UACR);
    if (stage)
      return (
        <li>
          <strong>DRC </strong> ({stage})
        </li>
      );
  } else {
    return (
      <li>
        <strong>DRC </strong> Sem TFG!
      </li>
    );
  }
}

export default CKDIndex;
