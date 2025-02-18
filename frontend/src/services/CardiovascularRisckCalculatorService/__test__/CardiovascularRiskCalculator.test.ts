import { describe, it, expect } from "vitest";
import { CardiovascularRiskCalculator } from "../CardiovascularRiskCalculator";
import { ICardiovascularRiskData } from "../ICardiovascularRiskData";

describe("CardiovascularRiskCalculator", () => {
  const mockData: ICardiovascularRiskData = {
    age: 50,
    gender: "Masculino",
    race: "Branco",
    systolicBloodPressure: 130,
    onHypertensionMed: 1,
    smoking: 1,
    diabetes: 0,
    totalCholesterol: 200,
    hdlCholesterol: 50,
  };

  it("deve calcular corretamente o risco real", () => {
    const result = CardiovascularRiskCalculator.realRiskResult(mockData);
    expect(result.risk).toBeGreaterThan(0);
    expect(result.risk).toBeLessThanOrEqual(100);
  });

  it("deve calcular corretamente o risco ideal", () => {
    const result = CardiovascularRiskCalculator.idealRiskResult(mockData);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it("não deve quebrar se os valores forem indefinidos", () => {
    const incompleteData: ICardiovascularRiskData = {
      ...mockData,
      age: 0, // Define um valor seguro
    };
    expect(() => CardiovascularRiskCalculator.realRiskResult(incompleteData)).not.toThrow();
  });
  
});
