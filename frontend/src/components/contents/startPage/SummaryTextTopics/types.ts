import { ClinicalPatientData } from "../../../../types";
export default interface MedicalTextTopicsProps {
  patient: ClinicalPatientData;
  variant?: "compact" | "detailed"; // Viscualização compacta e detalhada
  className?: string;
}
