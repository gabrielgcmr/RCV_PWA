import { IFIB4Data } from "./IFIB4Data";

export class FIB4Validator {
  static validate(data: IFIB4Data): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.age || data.age < 18 || data.age > 120) {
      errors.push("A idade deve estar entre 18 e 120 anos.");
    }
    if (!data.ast || data.ast <= 0) {
      errors.push("O valor de AST deve ser maior que 0.");
    }
    if (!data.alt || data.alt <= 0) {
      errors.push("O valor de ALT deve ser maior que 0.");
    }
    if (!data.platelets || data.platelets <= 0) {
      errors.push("O valor das plaquetas deve ser maior que 0.");
    }

    return { isValid: errors.length === 0, errors };
  }
}
