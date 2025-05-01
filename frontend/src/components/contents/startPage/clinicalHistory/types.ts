import { ClinicalPatient } from "../../../../types";
export default interface MedicalTextTopicsProps {
  patient: ClinicalPatient;
  variant?: "compact" | "detailed"; // Viscualização compacta e detalhada
  className?: string;
}
