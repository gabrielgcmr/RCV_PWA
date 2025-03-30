import { PatientData } from "../../interfaces/Patient";

export default interface MedicalTextTopicsProps {
    patientData: PatientData;
    variant?: "compact" | "detailed" // Viscualização compacta e detalhada
    className?: string;
}

