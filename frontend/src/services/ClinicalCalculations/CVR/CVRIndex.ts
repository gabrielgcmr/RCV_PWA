import { IPatientData } from "../../../interfaces/IPatientData";
import { CVRCalculator } from "./CVRCalculator";
import { CVRMapper } from "./CVRMapper";
import { CVRValidator } from "./CVRValidator";

export class CVRIndex {
  static calculateRCV(patientData: IPatientData, getExamValue:(name:string)=>number): {
    realRisk: number;
    realRiskCategory: string;
    idealRisk: number;
    errors: string[]
  } {
    // 1. Mapeamento dos dados para o formato correto
    const mappedData = CVRMapper.mapPatientData(patientData,getExamValue);
    console.log(mappedData)
    // 2. Verifica se os dados do paciente são válidos
    const validation = CVRValidator.validate(mappedData);
    if (!validation.isValid) {
      return { realRisk: 0, realRiskCategory: "Desconhecido", idealRisk: 0, errors: validation.errors };
    }
    // 3. Cálculo do risco real
    const { risk: realRisk, category: realRiskCategory } = CVRCalculator.realRiskResult(mappedData);
    // 4. Cálculo do risco ideal
    const idealRisk = CVRCalculator.idealRiskResult(mappedData);
    // 5. Retorna os resultados
    return { realRisk, realRiskCategory, idealRisk, errors: [] };
  }
}
