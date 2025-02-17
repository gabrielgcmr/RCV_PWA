import { IPatientData } from "../interfaces/IPatientData";

export class PatientDataService {
  /**
   * Atualiza um campo dentro do estado do paciente, garantindo que a estrutura seja preservada.
   */
  static updatePatientData<T extends keyof IPatientData>(
    patientData: IPatientData,
    field: T,
    value: Partial<IPatientData[T]> // 🔹 Permite atualizar apenas um ou vários campos sem sobrescrever os outros
  ): IPatientData {
    return {
      ...patientData,
      [field]: {
        ...patientData[field], // 🔹 Mantém os valores antigos
        ...value, // 🔹 Atualiza apenas os campos passados
      },
    };
  }
  
  /**
   * Adiciona ou atualiza um exame complementar no array de exames.
   */
  static updateComplementaryExam(
    patientData: IPatientData,
    examName: string,
    examValue: string
  ): IPatientData {
    const updatedExams = [...patientData.complementaryExams.exams];
    const examIndex = updatedExams.findIndex((exam) => exam.name === examName);

    if (examIndex !== -1) {
      updatedExams[examIndex].value = examValue; // Atualiza exame existente
    } else {
      updatedExams.push({ name: examName, value: examValue }); // Adiciona novo exame
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
