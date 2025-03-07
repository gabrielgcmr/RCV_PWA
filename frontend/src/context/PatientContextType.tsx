import { createContext } from "react";
import { PatientData } from "../interfaces/PatientData";

export interface PatientContext {
  patientData: PatientData;
  updatePatientData: (
    field: string,
    value: string | number
  ) => void;
}
export const PatientContext = createContext<PatientContext | undefined>(undefined);