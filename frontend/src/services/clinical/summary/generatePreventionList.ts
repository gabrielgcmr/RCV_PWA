import { Patient, Prevention } from "../../../interfaces";
import CKDEPIIndex from "../calculator/CKD-EPI/CKDEPIIndex";
import CVRIndex from "../calculator/CVR/CVRIndex";
import FIB4Index from "../calculator/FIB4/FIB4Index";

export default function generatePreventionList(patient: Patient): Prevention[] {
  return [CKDEPIIndex(patient), CVRIndex(patient), FIB4Index(patient)].filter(
    (p) => p !== undefined
  ); // se quiser, pode filtrar erros também
}
