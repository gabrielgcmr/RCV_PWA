import { ICVRData } from "./ICVRData";

export class CVRValidator {
  static validate(data: ICVRData): { isValid: boolean; errors: string[] } {
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
      errors.push('Escolha uma raça válida.');
    }
    // Validação da Pressão
    if (!data.systolicBloodPressure || data.systolicBloodPressure <60 || data.systolicBloodPressure > 250 ) {
      errors.push('Preencha o valor da PAS');
    }
    
    // Validação da CT
    if (!data.totalCholesterol || data.totalCholesterol <= 20 || data.totalCholesterol > 400) {
      errors.push("O colesterol total deve estar entre 20 e 400");
    }

    // Validação do HDL
    if (!data.hdlCholesterol || data.hdlCholesterol <= 10 || data.hdlCholesterol > 100) {
      errors.push("O HDL deve estar entre 10 e 100");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}