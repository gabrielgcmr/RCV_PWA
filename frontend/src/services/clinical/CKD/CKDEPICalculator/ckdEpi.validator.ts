import CKDEPIData from "./ckdEpi.data";

// Valida os dados para CKD-EPI.
export default function validateCKDEPIData(data: CKDEPIData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const age = data.age
  const creatinine = data.seric_creatinine

  // Adiciona erro se a condição não for atendida.
  const validate = (condition: boolean, message: string) => {
    if (!condition) errors.push(message);
  };

  validate(Number(age) >= 18 && Number(age) <= 100, "A idade deve estar entre 18 e 100 anos.");
  validate(["male", "female"].includes(data.gender), 'O gênero deve ser "masculino" ou "feminino".');
  validate(["white", "black", "other"].includes(data.race), "Escolha uma raça válida.");
  validate(Number(creatinine) > 0 && Number(creatinine) <= 15, "A creatinina sérica deve estar entre 0.1 e 15 mg/dL.");

  return { isValid: errors.length === 0, errors };
}
