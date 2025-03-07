import { PatientData } from "../interfaces/PatientData";

// PatientDataService.ts
export class PatientService {
  static updatePatientData<T extends keyof PatientData>(
    patientData: PatientData,
    section: T,
    field: keyof PatientData[T],
    value: PatientData[T][typeof field]
  ): PatientData {
    return {
      ...patientData,
      [section]: {
        ...patientData[section],
        [field]:value,
      },
    };
  }
}
