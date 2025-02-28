import { ICKDEPIData } from "./ICKDEOIData";

export class CKDEPIValidator {
  static validate(data: ICKDEPIData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validação da idade
    if (!data.age || data.age < 18 || data.age > 100) {
      errors.push("A idade deve estar entre 18 e 100 anos.");
    }

    // Validação do gênero
    if (!["male", "female"].includes(data.gender)) {
      errors.push('O gênero deve ser "masculino" ou "feminino".');
    }

    // Validação da raça
    if (!["white", "black", "other"].includes(data.race)) {
      errors.push('Escolha uma raça válida".');
    }

    // Validação da creatinina sérica
    if (!data.seric_creatinine || data.seric_creatinine <= 0 || data.seric_creatinine > 15) {
      errors.push("A creatinina sérica deve estar entre 0.1 e 15 mg/dL.");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
