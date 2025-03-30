import { examDictionary } from "../constants/examDictionary";
import { PatientData } from "../interfaces/Patient";

export class PatientDataService {
  /**
   * Atualiza um campo dentro do estado do paciente, garantindo que a estrutura seja preservada.
   */
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

  /**
   * Adiciona ou atualiza um exame complementar no array de exames,
   * garantindo que a abreviação nunca seja perdida.
   */
  static updateComplementaryExam(
    patientData: PatientData,
    examName: string,
    examValue: string
  ): PatientData {
    const updatedExams = [...patientData.complementaryExams.exams];
    const examIndex = updatedExams.findIndex((exam) => exam.name === examName);

    if (examIndex !== -1) {
      // 🔹 Mantemos a abreviação original ao atualizar o exame existente
      updatedExams[examIndex] = {
        ...updatedExams[examIndex],
        value: examValue,
      };
    } else {
      // 🔹 Buscamos a abreviação no `examDictionary` ao adicionar um novo exame
      updatedExams.push({
        name: examName,
        value: examValue,
        abbreviation: examDictionary[examName]?.abbreviation || "", // 🔥 Aqui está a correção!
      });
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
