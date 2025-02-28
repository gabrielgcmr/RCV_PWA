import { IPatientData } from "../../../interfaces/IPatientData";

export class CKDEPIMapper {
  static mapPatientData(patientData: IPatientData, getExamValue: (name: string) => number) {
    const seric_creatinine_result = getExamValue("creatinine");

    return {
      age: Number(patientData.identification.age),
      gender: patientData.identification.gender.toLowerCase(),
      race: patientData.identification.race.toLowerCase(),
      seric_creatinine: seric_creatinine_result,

    };
  }
}
