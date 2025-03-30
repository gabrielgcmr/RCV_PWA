import { PatientData } from "../../interfaces/Interfaces";

export default interface MedicalTextTopicsProps {
    patientData: PatientData;
    variant?: "compact" | "detailed" // Viscualização compacta e detalhada
    className?: string;
}

