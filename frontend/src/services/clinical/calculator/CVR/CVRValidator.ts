import  CVRData  from "./CVRData";

/**
 * Função para validar os dados do risco cardiovascular.
 */
export default function validateCVRData(data: CVRData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  /**
   * Adiciona um erro à lista se a condição não for atendida.
   */
  const validate = (condition: boolean, message: string) => {
    if (!condition) errors.push(message);
  };

  // Validações
  validate(data.age >= 18 && data.age <= 100, "A idade deve estar entre 18 e 100 anos.");
  validate(["male", "female"].includes(data.gender), 'O gênero deve ser "masculino" ou "feminino".');
  validate(["white", "black", "other"].includes(data.race), "Escolha uma raça válida.");
  validate(data.systolicBloodPressure >= 60 && data.systolicBloodPressure <= 250, "Preencha o valor da PAS.");
  validate(data.totalCholesterol > 20 && data.totalCholesterol <= 400, "O colesterol total deve estar entre 20 e 400.");
  validate(data.hdl > 10 && data.hdl <= 100, "O HDL deve estar entre 10 e 100.");

  return {
    isValid: errors.length === 0,
    errors,
  };
}
