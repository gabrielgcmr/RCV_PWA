import { FIB4Data } from "./FIB4Data";

// Valida os dados para o cálculo do FIB-4.
export function validateFIB4Data(data: FIB4Data): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Adiciona erro se a condição não for atendida.
  const validate = (condition: boolean, message: string) => {
    if (!condition) errors.push(message);
  };

  validate(data.age >= 18 && data.age <= 120, "A idade deve estar entre 18 e 120 anos.");
  validate(data.ast > 0, "O valor de AST deve ser maior que 0.");
  validate(data.alt > 0, "O valor de ALT deve ser maior que 0.");
  validate(data.platelets > 0, "O valor das plaquetas deve ser maior que 0.");

  return { isValid: errors.length === 0, errors };
}
