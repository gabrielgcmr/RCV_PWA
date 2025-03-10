import { PatientData } from "../../../interfaces/Interfaces";

/**
 * Função para mapear os dados do paciente para o cálculo do risco cardiovascular.
 */
export function mapPatientData(patientData: PatientData) {
   
 /** 
  * Obtém o valor de um exame pelo nome. Retorna 0 se não for encontrado.
  */
 const getExamValue = (name: string): number =>
   Number(patientData.complementaryExams.exams.find(exam => exam.name === name)?.value || 0);

  /**
   * Verifica se um problema específico está na lista de problemas do paciente.
   */
  const hasProblem = (problemName: string): boolean =>
    patientData.problemList.problems.some((p) => p.name === problemName);

  return {
    age: Number(patientData.identification.age),
    gender: patientData.identification.gender.toLowerCase(),
    race: patientData.identification.race,
    systolicBloodPressure: Number(patientData.physicalExam.systolicBP),
    onHypertensionMed: hasProblem("HAS") ? 1 : 0,
    smoking: hasProblem("Tabagismo") ? 1 : 0,
    diabetes: hasProblem("Diabetes") ? 1 : 0,
    totalCholesterol: getExamValue("totalCholesterol"),
    hdlCholesterol: getExamValue("hdlCholesterol"),
  };
}
