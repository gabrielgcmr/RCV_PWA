// utils/calculateAllPreventions.ts
import { ClinicalPatientData, Prevention } from "@/interfaces";
import CVRIndex from "@/services/clinical/calculator/CVR/CVRIndex";
import FIB4Index from "@/services/clinical/calculator/FIB4/FIB4Index";
import CKDEPIIndex from "@/services/clinical/calculator/CKDEPI/CKDEPIIndex";

export function calculateAllPreventions(patient: ClinicalPatientData): Prevention[] {
  const list: Prevention[] = [];

  const cvr = CVRIndex(patient);
  const fib4 = FIB4Index(patient);
  const tfg = CKDEPIIndex(patient);

  if (cvr) list.push(cvr);
  if (fib4) list.push(fib4);
  if (tfg) list.push(tfg);

  return list;
}
