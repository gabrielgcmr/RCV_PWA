import { ClinicalPatientData } from "../../../../types";


// Função para mapear os dados do paciente para o cálculo da equação CKD-EPI.
export default function mapCKDEPIData(patient: ClinicalPatientData) {
  //Obtém o valor de um exame pelo nome. Retorna 0 se não for encontrado.
  const getExamValue = (name: string): number =>
    Number(patient.exams.find(exam => exam.key === name)?.value || 0);

  return {
    age: Number(patient.identification.age),
    gender: patient.identification.gender.toLowerCase(),
    race: patient.identification.race.toLowerCase(),
    seric_creatinine: getExamValue("creatinine"),
  };
}
