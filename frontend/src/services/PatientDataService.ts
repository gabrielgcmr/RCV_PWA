import { PatientData } from "../interfaces/PatientData";

// PatientDataService.ts
export class PatientDataService {
  static updatePatientData<T extends keyof PatientData>(
    patientData: PatientData,
    field: T,
    value: Partial<PatientData[T]>
  ): PatientData {
    return {
      ...patientData,
      [field]: {
        ...patientData[field],
        ...value,
      },
    };
  }
  
  static updateComplementaryExam(
    patientData: PatientData,
    examName: string,
    examValue: string | number,
    abbreviation?: string
  ): PatientData {
    const updatedExams = patientData.complementaryExams.exams.map((exam) =>
      exam.name === examName ? { ...exam, value: examValue } : exam
    );
    
    const examExists = patientData.complementaryExams.exams.some(
      (exam) => exam.name === examName
    );
    
    if (!examExists) {
      updatedExams.push({ name: examName, value: examValue, abbreviation });
    }
    
    return {
      ...patientData,
      complementaryExams: {
        ...patientData.complementaryExams,
        exams: updatedExams,
      },
    };
  }
}
