import { IPatientData } from "../../interfaces/IPatientData";
import { ICardiovascularRiskDTO } from "./ICardiovascularRiskDTO";

export class PatientDataValidator {
  static validatePatientForRiskCalculation(patientData: IPatientData): void {
    if (!patientData) {
      throw new Error("Os dados do paciente não foram carregados corretamente.");
    }

    const errors: string[] = [];

    if (!patientData.identification.age || !(30 <= Number(patientData.identification.age) && Number(patientData.identification.age) <= 100)) {
      errors.push("Preencha a idade corretamente (entre 30 e 100 anos).");
    }

    if (!patientData.physicalExam.systolicBP || !(80 <= Number(patientData.physicalExam.systolicBP) && Number(patientData.physicalExam.systolicBP) <= 240)) {
      errors.push("Preencha a Pressão Sistólica corretamente (entre 80 e 240 mmHg).");
    }

    const totalCholesterol = patientData.complementaryExams.exams.find(exam => exam.name === "Colesterol Total")?.value;
    if (!totalCholesterol || !(10 <= Number(totalCholesterol) && Number(totalCholesterol) <= 400)) {
      errors.push("Preencha o Colesterol Total corretamente (entre 10 e 400 mg/dL).");
    }

    const hdlCholesterol = patientData.complementaryExams.exams.find(exam => exam.name === "HDL")?.value;
    if (!hdlCholesterol || !(10 <= Number(hdlCholesterol) && Number(hdlCholesterol) <= 100)) {
      errors.push("Preencha o HDL corretamente (entre 10 e 100 mg/dL).");
    }

    if (!["Masculino", "Feminino"].includes(patientData.identification.gender)) {
      errors.push("Gênero deve ser 'Masculino' ou 'Feminino'.");
    }

    if (!patientData.identification.race) {
      errors.push("Preencha uma raça.");
    }

    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }
  }

  static getRiskData(patientData: IPatientData): ICardiovascularRiskDTO {
    return {
      age: Number(patientData.identification.age),
      gender: patientData.identification.gender,
      race: patientData.identification.race,
      systolicBloodPressure: Number(patientData.physicalExam.systolicBP),
      onHypertensionMed: patientData.lifeHabits.isTreatingHAS ? 1 : 0,
      smoking: patientData.lifeHabits.isSmoker ? 1 : 0,
      diabetes: patientData.lifeHabits.hasDiabetes ? 1 : 0,
      totalCholesterol: Number(patientData.complementaryExams.exams.find(exam => exam.name === "Colesterol Total")?.value || 0),
      hdlCholesterol: Number(patientData.complementaryExams.exams.find(exam => exam.name === "HDL")?.value || 0),
    };
  }
}

