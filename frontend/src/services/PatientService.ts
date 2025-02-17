
import { usePatient } from "../hooks/usePatient";
import { CardiovascularRiskService } from "./CardiovascularRisckCalculatorService/CardiovascularRiskService";

export class PatientService {
        /**
   * Calcula o risco cardiovascular com base nos dados do paciente.
   */
    const realRiskResult = CardiovascularRiskService.realRiskResult(usePatient().patientData);
    const idealRiskResult = CardiovascularRiskService.idealRiskResult(usePatient().patientData);
}

