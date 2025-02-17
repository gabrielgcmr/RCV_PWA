import { ICardiovascularRiskDTO } from "./ICardiovascularRiskDTO";
import { PatientDataValidator } from "./PatientDataValidator";

export class CardiovascularRiskService {
        /**
   * Calcula o risco cardiovascular com base nos dados do paciente.
   */
        const riskData = PatientDataValidator.getRiskData(patientData);
        PatientDataValidator.validatePatientForRiskCalculation(patientData);
        const riskResult = CardiovascularRiskService.realRiskResult(riskData);vc   

    private static raceValues: Record<string, number> = {
        "Branco": 0,
        "Preto": 1,
        "Outro": 0.00001,
    };
    
    public static getRaceValue(race: string): number {
        return this.raceValues[race] ?? 0;
    };
             
    static equationForGetLogit(data: ICardiovascularRiskDTO, idealValues = false): number {
        const raceValue = this.getRaceValue(data.race);
        const age = data.age;
        const gender = data.gender;
        let systolicBloodPressure, smoker, totalCholesterol, hdlCholesterol;

        if (idealValues) {
            systolicBloodPressure = 120;
            smoker = 0;
            totalCholesterol = 180;
            hdlCholesterol = 50;
          } else {
            systolicBloodPressure = data.systolicBloodPressure;
            smoker = data.smoking;
            totalCholesterol = data.totalCholesterol;
            hdlCholesterol = data.hdlCholesterol;
          }

        const systolicBloodPressure2 = systolicBloodPressure ** 2;
        const cholesterolRatio = totalCholesterol / hdlCholesterol;
        
        let logit;
        if (gender === "Feminino") {
          logit = (-12.823110 + (0.106501 * age) + (0.432440 * raceValue) +
            (0.000056 * systolicBloodPressure2) + (0.017666 * systolicBloodPressure) +
            (0.731678 * data.onHypertensionMed) + (0.943970 * data.diabetes) + (1.009790 * smoker) +
            (0.151318 * cholesterolRatio) + (-0.008580 * age * raceValue) +
            (-0.003647 * systolicBloodPressure * data.onHypertensionMed) +
            (0.006208 * systolicBloodPressure * raceValue) +
            (0.152968 * raceValue * data.onHypertensionMed) + (-0.000153 * age * systolicBloodPressure) +
            (0.115232 * raceValue * data.diabetes) + (-0.092231 * raceValue * smoker) +
            (0.070498 * raceValue * cholesterolRatio) +
            (-0.000173 * raceValue * systolicBloodPressure * data.onHypertensionMed) +
            (-0.000094 * age * systolicBloodPressure * raceValue));
        } else {
          logit = (-11.679980 + (0.064200 * age) + (0.482835 * raceValue) +
            (-0.000061 * systolicBloodPressure2) + (0.038950 * systolicBloodPressure) +
            (2.055533 * data.onHypertensionMed) + (0.842209 * data.diabetes) + (0.895589 * smoker) +
            (0.193307 * cholesterolRatio) + (-0.014207 * systolicBloodPressure * data.onHypertensionMed) +
            (0.011609 * systolicBloodPressure * raceValue) +
            (-0.119460 * data.onHypertensionMed * raceValue) + (0.000025 * age * systolicBloodPressure) +
            (-0.077214 * raceValue * data.diabetes) + (-0.226771 * raceValue * smoker) +
            (-0.117749 * raceValue * cholesterolRatio) +
            (0.004190 * raceValue * data.onHypertensionMed * systolicBloodPressure) +
            (-0.000199 * raceValue * age * systolicBloodPressure));
        }
    
        return 100 / (1 + Math.exp(-logit));
    }
      
    static realRiskResult(data: ICardiovascularRiskDTO): number {
        return this.equationForGetLogit(data, false);
    }
    
    static idealRiskResult(data: ICardiovascularRiskDTO): number {
        return this.equationForGetLogit(data, true);
    }
}
