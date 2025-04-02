import { Patient } from "../../../../interfaces";
export default interface MedicalTextTopicsProps {
    patientData: Patient;
    variant?: "compact" | "detailed" // Viscualização compacta e detalhada
    className?: string;
}

