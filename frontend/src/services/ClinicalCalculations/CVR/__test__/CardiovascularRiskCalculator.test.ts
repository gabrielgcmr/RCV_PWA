import { describe, it, expect } from "vitest";
import { CVRData } from "../CVRData";
import { calculateCVR } from "../CVRCalculator";


describe("CardiovascularRiskCalculator", () => {
  const mockData: CVRData = {
    age: 50,
    gender: "Masculino",
    race: "Branco",
    systolicBloodPressure: 130,
    onHypertensionMed: 1,
    smoking: 1,
    diabetes: 0,
    totalCholesterol: 200,
    hdl: 50,
  };

  it("deve calcular corretamente o risco real", () => {
    const result = calculateCVR(mockData);
    expect(result.realRiskResult).toBeGreaterThan(0);
    expect(result.realRiskResult).toBeLessThanOrEqual(100);
  });

  it("deve calcular corretamente o risco ideal", () => {
    const result = calculateCVR(mockData);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it("não deve quebrar se os valores forem indefinidos", () => {
    const incompleteData: CVRData = {
      ...mockData,
      age: 0, // Define um valor seguro
    };
    expect(() => calculateCVR(incompleteData)).not.toThrow();
  });
  
});
