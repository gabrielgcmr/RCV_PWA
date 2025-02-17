import { IPatientData } from "../../interfaces/IPatientData";
import { CardiovascularRiskValidator } from "./CardiovascularRiskValidator";
import { CardiovascularRiskCalculator } from "./CardiovascularRiskCalculator";
import { CardiovascularRiskMapper } from "./CardivacularRiskMapper";

export class CardiovascularRiskIndex {
  /**
   * Processa o cálculo do risco cardiovascular do paciente.
   */
  static processRiskCalculation(patientData: IPatientData): {
    realRisk: number;
    realRiskCategory: string;
    idealRisk: number;
  } {
    // 1. Verifica se os dados do paciente são válidos
    const isValid = CardiovascularRiskValidator.validatePatientForRiskCalculation(patientData);
    
    if (!isValid) {
      return { realRisk: 0, realRiskCategory: "Desconhecido", idealRisk: 0 };
    }
    
    // 1. Validação dos dados do paciente
    CardiovascularRiskValidator.validatePatientForRiskCalculation(patientData);

    // 2. Mapeamento dos dados para o formato correto
    const mappedData = CardiovascularRiskMapper.mapPatientData(patientData);

    // 3. Cálculo do risco real
    const { risk: realRisk, category: realRiskCategory } = CardiovascularRiskCalculator.realRiskResult(mappedData);

    // 4. Cálculo do risco ideal
    const idealRisk = CardiovascularRiskCalculator.idealRiskResult(mappedData);

    // 5. Retorna os resultados
    return { realRisk, realRiskCategory, idealRisk };
  }
}
