import { IPatientData } from "../../interfaces/IPatientData";
import { CKDEPICalculator } from "./CKDEPICalculator";
import { CKDEPIMapper } from "./CKDEPIMapper";
import { CKDEPIValidator } from "./CKDEPIValidator";

export class CKDEPIIndex {
    static calculateTFG(patientData: IPatientData, getExamValue: (name: string) => number): { tfg: number | null; errors: string[] } {
      // Mapeia os dados do paciente
      const mappedData = CKDEPIMapper.mapPatientData(patientData, getExamValue);
  
      // Valida os dados mapeados
      const validation = CKDEPIValidator.validate(mappedData);
      if (!validation.isValid) {
        return { tfg: null, errors: validation.errors };
      }
  
      // Calcula a TFG com os dados validados
      const tfg = CKDEPICalculator.calculate(mappedData);
  
      return { tfg, errors: [] };
    }
  }