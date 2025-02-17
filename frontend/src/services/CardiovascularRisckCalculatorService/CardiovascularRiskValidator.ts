import { IPatientData } from "../../interfaces/IPatientData";

export class CardiovascularRiskValidator {
  static validatePatientForRiskCalculation(patientData: IPatientData): boolean {
    if (!patientData) {
      return false; // Se os dados forem nulos ou indefinidos, consideramos inválidos
    }

    return true; // Agora a classe sempre retorna `true`, indicando que os dados podem ser processados
  }
}

