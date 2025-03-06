import { createContext } from "react";
import { PatientData } from "../interfaces/PatientData";

export interface PatientContextType {
  patientData: PatientData;
  updatePatientData: (
    section: keyof PatientData,
    field: string,
    value: string | number | boolean,
    options?: { exam?: boolean; abbreviation?: string }
  ) => void;
}
export const PatientContext = createContext<PatientContextType | undefined>(undefined);