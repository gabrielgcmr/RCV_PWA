import { IPatientData } from "../../../interfaces/IPatientData";

export class CVRMapper {
  static mapPatientData(patientData: IPatientData, getExamValue: (name: string) => number) {
    const totalCholesterol = getExamValue("totalCholesterol");
    const hdlCholesterol = getExamValue("hdlCholesterol");

    // Função auxiliar para verificar se um problema existe na lista
    const hasProblem = (problemName: string) => {
      return patientData.problemList.problems.some((p) => p.name === problemName);
    };

    return {
      age: Number(patientData.identification.age),
      gender: patientData.identification.gender.toLowerCase(),
      race: patientData.identification.race,
      systolicBloodPressure: Number(patientData.physicalExam.systolicBP),
      onHypertensionMed: hasProblem("HAS") ? 1 : 0, // Verificando na lista de problemas
      smoking: hasProblem("Tabagismo") ? 1 : 0, // Verificando na lista de problemas
      diabetes: hasProblem("Diabetes") ? 1 : 0, // Verificando na lista de problemas
      totalCholesterol: totalCholesterol,
      hdlCholesterol: hdlCholesterol,
    };
  }
}
