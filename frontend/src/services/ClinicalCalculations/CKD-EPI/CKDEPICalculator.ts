import { CKDEPIData } from "./CKDEPIData";

export class CKDEPICalculator {
  static calculate(data: CKDEPIData): number {
    const { age, gender, race, seric_creatinine } = data;

    // Definição dos coeficientes
    const kappa = gender === "female" ? 0.7 : 0.9;
    const alpha = gender === "female" ? -0.329 : -0.411;

    // Cálculo dos fatores da creatinina
    const minFactor = Math.min(seric_creatinine / kappa, 1) ** alpha;
    const maxFactor = Math.max(seric_creatinine / kappa, 1) ** -1.209;

    // Cálculo da idade
    const ageFactor = 0.993 ** age;

    // Fatores adicionais
    const genderFactor = gender === "female" ? 1.018 : 1;
    const raceFactor = race === "black" ? 1.159 : 1;

    // Cálculo final da TFG
    const eGFR = 141 * minFactor * maxFactor * ageFactor * genderFactor * raceFactor;

    return parseFloat(eGFR.toFixed(2)); // Retorna com duas casas decimais
  }
}
