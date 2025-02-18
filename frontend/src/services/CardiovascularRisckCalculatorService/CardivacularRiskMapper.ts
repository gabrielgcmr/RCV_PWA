import { IPatientData } from "../../interfaces/IPatientData";

export class CardiovascularRiskMapper {
  static mapPatientData(patientData: IPatientData,getExamValue: (name: string) => number) {
    const totalCholesterol = getExamValue("totalCholesterol");
    const hdlCholesterol = getExamValue("hdlCholesterol");
    
    return {
      age: Number(patientData.identification.age),
      gender: patientData.identification.gender.toLowerCase(),
      race: patientData.identification.race,
      systolicBloodPressure: Number(patientData.physicalExam.systolicBP),
      onHypertensionMed: patientData.lifeHabits.isTreatingHAS ? 1 : 0,
      smoking: patientData.lifeHabits.isSmoker ? 1 : 0,
      diabetes: patientData.lifeHabits.hasDiabetes ? 1 : 0,
      totalCholesterol: totalCholesterol,
      hdlCholesterol: hdlCholesterol,
    };
  }
}
