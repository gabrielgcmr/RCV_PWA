import { ClinicalPatientData } from "../../../../types";


/**
 * Função para mapear os dados do paciente para o cálculo do risco cardiovascular.
 */
export default function mapPatientData(patient: ClinicalPatientData) {
   
 /** 
  * Obtém o valor de um exame pelo nome. Retorna 0 se não for encontrado.
  */
 const getExamValue = (name: string): number =>
   Number(patient.exams.find(exam => exam.name === name)?.value || 0);

  /**
   * Verifica se um problema específico está na lista de problemas do paciente.
   */
  const hasProblem = (problemName: string): boolean =>
    patient.problems.some((p) => p.key === problemName);

  return {
    age: Number(patient.identification.age),
    gender: patient.identification.gender.toLowerCase(),
    race: patient.identification.race,
    systolicBloodPressure: Number(patient.physicalExam.systolicBP),
    onHypertensionMed: hasProblem("hypertension") ? 1 : 0,
    smoking: hasProblem("tabagism") ? 1 : 0,
    diabetes: hasProblem("diabetes") ? 1 : 0,
    totalCholesterol: getExamValue("totalCholesterol"),
    hdl: getExamValue("hdl"),
  };
}
