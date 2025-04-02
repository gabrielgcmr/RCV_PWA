import { Patient, Prevention } from "../../../interfaces";
import CKDEPIIndex from "../calculator/CKD-EPI/CKDEPIIndex";
import CVRIndex from "../calculator/CVR/CVRIndex";
import FIB4Index from "../calculator/FIB4/FIB4Index";


export function getAllPreventions(patient: Patient): Prevention[] {
  const fib4 = FIB4Index(patient);
  const tfg = CKDEPIIndex(patient);
  const rcv = CVRIndex(patient);

  return [fib4, tfg, rcv];
}
