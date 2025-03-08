import { PatientData } from "../interfaces/Interfaces";

// PatientDataService.ts
export class PatientService {
    static validatePatientData(patientData: PatientData): boolean {
        // Adicione validações específicas aqui
        return true; // Retorne `false` se a validação falhar
      }
}
