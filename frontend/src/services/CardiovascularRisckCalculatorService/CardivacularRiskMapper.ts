import { IPatientData } from "../../interfaces/IPatientData";

export class CardiovascularRiskMapper {
  static mapPatientData(patientData: IPatientData) {
    const getExamValue = (name: string) =>
      Number(patientData.complementaryExams.exams.find(exam => exam.name === name)?.value) || 0;

    return {
      age: Number(patientData.identification.age) || 0,
      gender: patientData.identification.gender.toLowerCase(),
      race: patientData.identification.race,
      systolicBloodPressure: Number(patientData.physicalExam.systolicBP) || 0,
      onHypertensionMed: patientData.lifeHabits.isTreatingHAS ? 1 : 0,
      smoking: patientData.lifeHabits.isSmoker ? 1 : 0,
      diabetes: patientData.lifeHabits.hasDiabetes ? 1 : 0,
      totalCholesterol: getExamValue("Colesterol Total") || 0,
      hdlCholesterol: getExamValue("HDL")|| 1,
    };
  }
}
