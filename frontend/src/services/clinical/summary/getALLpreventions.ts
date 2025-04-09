import { ClinicalPatientData, Prevention } from "../../../types";
import CKDEPIIndex from "../calculator/CKDEPI/CKDEPIIndex";
import CVRIndex from "../calculator/CVR/CVRIndex";
import FIB4Index from "../calculator/FIB4/FIB4Index";


export function getAllPreventions(patient: ClinicalPatientData): Prevention[] {
  const fib4 = FIB4Index(patient);
  const tfg = CKDEPIIndex(patient);
  const rcv = CVRIndex(patient);

  return [fib4, tfg, rcv];
}
