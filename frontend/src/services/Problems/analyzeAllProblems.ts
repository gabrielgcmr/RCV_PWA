import { PatientData } from "../../interfaces/Interfaces";
import analyzeCKD from "./CKD/analyzeCKD";

export default function analyzeAllProblems(patientData: PatientData) {
  return [
    analyzeCKD(patientData),

    // outros problemas...
  ];
}
