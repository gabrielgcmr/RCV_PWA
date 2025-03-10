import { CKDEPIData } from "./CKDEPIData";

// Calcula a TFG pela equação CKD-EPI.
export function calculateCKDEPI(data: CKDEPIData): number {
  const { age, gender, race, seric_creatinine } = data;

  const kappa = gender === "female" ? 0.7 : 0.9;
  const alpha = gender === "female" ? -0.329 : -0.411;

  const minFactor = Math.min(seric_creatinine / kappa, 1) ** alpha;
  const maxFactor = Math.max(seric_creatinine / kappa, 1) ** -1.209;
  const ageFactor = 0.993 ** age;
  const genderFactor = gender === "female" ? 1.018 : 1;
  const raceFactor = race === "black" ? 1.159 : 1;

  return parseFloat((141 * minFactor * maxFactor * ageFactor * genderFactor * raceFactor).toFixed(2));
}
