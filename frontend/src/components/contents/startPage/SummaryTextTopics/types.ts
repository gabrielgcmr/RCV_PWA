import { Patient } from "../../../../interfaces/Patient";
export default interface MedicalTextTopicsProps {
  patient: Patient;
  variant?: "compact" | "detailed"; // Viscualização compacta e detalhada
  className?: string;
}
