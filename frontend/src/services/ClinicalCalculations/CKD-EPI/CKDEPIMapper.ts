import { PatientData } from "../../../interfaces/Interfaces";

// Função para mapear os dados do paciente para o cálculo da equação CKD-EPI.
export function mapCKDEPIData(patientData: PatientData) {
  //Obtém o valor de um exame pelo nome. Retorna 0 se não for encontrado.
  const getExamValue = (name: string): number =>
    Number(patientData.complementaryExams.exams.find(exam => exam.name === name)?.value || 0);

  return {
    age: Number(patientData.identification.age),
    gender: patientData.identification.gender.toLowerCase(),
    race: patientData.identification.race.toLowerCase(),
    seric_creatinine: getExamValue("creatinine"),
  };
}
