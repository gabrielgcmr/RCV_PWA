import { ClinicalPatientData } from "../../../../interfaces";
export default interface MedicalTextTopicsProps {
  patient: ClinicalPatientData;
  variant?: "compact" | "detailed"; // Viscualização compacta e detalhada
  className?: string;
}
