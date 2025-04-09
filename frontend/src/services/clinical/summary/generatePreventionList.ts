import { ClinicalPatientData, Prevention } from "../../../types";
import CKDEPIIndex from "../calculator/CKDEPI/CKDEPIIndex";
import CVRIndex from "../calculator/CVR/CVRIndex";
import FIB4Index from "../calculator/FIB4/FIB4Index";

export default function generatePreventionList(patient: ClinicalPatientData): Prevention[] {
  return [CKDEPIIndex(patient), CVRIndex(patient), FIB4Index(patient)].filter(
    (p) => p !== undefined
  ); // se quiser, pode filtrar erros também
}
