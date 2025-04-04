import { Patient } from "../../../../interfaces";


// Função para mapear os dados do paciente para o cálculo da equação CKD-EPI.
export default function mapCKDEPIData(patient: Patient) {
  //Obtém o valor de um exame pelo nome. Retorna 0 se não for encontrado.
  const getExamValue = (name: string): number =>
    Number(patient.complementaryExams.exams.find(exam => exam.name === name)?.value || 0);

  return {
    age: Number(patient.identification.age),
    gender: patient.identification.gender.toLowerCase(),
    race: patient.identification.race.toLowerCase(),
    seric_creatinine: getExamValue("creatinine"),
  };
}
