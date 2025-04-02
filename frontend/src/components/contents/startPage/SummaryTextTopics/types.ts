import { Patient } from "../../../../interfaces";
export default interface MedicalTextTopicsProps {
  patient: Patient;
  variant?: "compact" | "detailed"; // Viscualização compacta e detalhada
  className?: string;
}
