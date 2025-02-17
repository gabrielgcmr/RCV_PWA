import { IPatientData } from "../../interfaces/IPatientData";

export class CardiovascularRiskValidator {
  static validatePatientForRiskCalculation(patientData: IPatientData): void {
    if (!patientData) {
      throw new Error("Os dados do paciente não foram carregados corretamente.");
    }

    const errors: string[] = [];

    // Função auxiliar para validar números dentro de uma faixa
    const isValidNumber = (value: any, min: number, max: number): boolean => {
      const num = Number(value);
      return !isNaN(num) && num >= min && num <= max;
    };

    const { identification, physicalExam, complementaryExams } = patientData;

    if (!isValidNumber(identification?.age, 30, 100)) {
      errors.push("Preencha a idade corretamente (entre 30 e 100 anos).");
    }

    if (!isValidNumber(physicalExam?.systolicBP, 80, 240)) {
      errors.push("Preencha a Pressão Sistólica corretamente (entre 80 e 240 mmHg).");
    }

    const getExamValue = (name: string) =>
      complementaryExams?.exams?.find((exam) => exam.name === name)?.value;

    if (!isValidNumber(getExamValue("Colesterol Total"), 10, 400)) {
      errors.push("Preencha o Colesterol Total corretamente (entre 10 e 400 mg/dL).");
    }

    if (!isValidNumber(getExamValue("HDL"), 10, 100)) {
      errors.push("Preencha o HDL corretamente (entre 10 e 100 mg/dL).");
    }

    if (!["Masculino", "Feminino"].includes(identification?.gender)) {
      errors.push("Gênero deve ser 'Masculino' ou 'Feminino'.");
    }

    if (!identification?.race) {
      errors.push("Preencha uma raça.");
    }

    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }
  }
}

