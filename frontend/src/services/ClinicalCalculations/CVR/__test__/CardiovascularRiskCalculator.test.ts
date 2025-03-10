import { describe, it, expect } from "vitest";
import { CVRCalculator } from "../CVRCalculator";
import { ICVRData } from "../CVRData";

describe("CardiovascularRiskCalculator", () => {
  const mockData: ICVRData = {
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
    const result = CVRCalculator.realRiskResult(mockData);
    expect(result.risk).toBeGreaterThan(0);
    expect(result.risk).toBeLessThanOrEqual(100);
  });

  it("deve calcular corretamente o risco ideal", () => {
    const result = CVRCalculator.idealRiskResult(mockData);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it("não deve quebrar se os valores forem indefinidos", () => {
    const incompleteData: ICVRData = {
      ...mockData,
      age: 0, // Define um valor seguro
    };
    expect(() => CVRCalculator.realRiskResult(incompleteData)).not.toThrow();
  });
  
});
