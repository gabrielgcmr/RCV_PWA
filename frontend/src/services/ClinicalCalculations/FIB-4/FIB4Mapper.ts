import { PatientData } from "../../../interfaces/Interfaces";
import { IFIB4Data } from "./IFIB4Data";

export class FIB4Mapper {
  static mapPatientData(patientData: PatientData, getExamValue: (name: string) => number): IFIB4Data {
    return {
      age: Number(patientData.identification.age),
      ast: getExamValue("AST"),
      alt: getExamValue("ALT"),
      platelets: getExamValue("platelets"),
    };
  }
}
