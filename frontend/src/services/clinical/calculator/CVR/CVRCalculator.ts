import CVRData from "./CVRData";


/**
 * Função para calcular o risco cardiovascular e suas classificações.
 */
export default function calculateCVR(data: CVRData) {
  /**
   * Obtém o valor da raça para o cálculo do risco cardiovascular.
   */
  const getRaceValue = (race: string): number => {
    const raceValues: Record<string, number> = {
      "white": 0,
      "black": 1,
      "other": 0.00001,
    };
    return raceValues[race.trim().toLowerCase()] ?? 0;
  };

  /**
   * Calcula o logit baseado nos dados do paciente e em valores ideais opcionais.
   */
  const equationForGetLogit = (idealValues = false): number => {
    const raceValue = getRaceValue(data.race);
    const { age, gender, onHypertensionMed, diabetes } = data;
    let smoking = data.smoking;
    let systolicBloodPressure, totalCholesterol, hdlCholesterol;

    if (idealValues) {
      systolicBloodPressure = 120;
      smoking = 0;
      totalCholesterol = 180;
      hdlCholesterol = 50;
    } else {
      systolicBloodPressure = data.systolicBloodPressure;
      totalCholesterol = data.totalCholesterol;
      hdlCholesterol = data.hdl;
    }

    const systolicBloodPressure2 = systolicBloodPressure ** 2;
    const cholesterolRatio = totalCholesterol / hdlCholesterol;

    const logit =
      gender.toLowerCase() === "female"
        ? -12.823110 +
          0.106501 * age +
          0.432440 * raceValue +
          0.000056 * systolicBloodPressure2 +
          0.017666 * systolicBloodPressure +
          0.731678 * onHypertensionMed +
          0.943970 * diabetes +
          1.009790 * smoking +
          0.151318 * cholesterolRatio +
          -0.008580 * age * raceValue +
          -0.003647 * systolicBloodPressure * onHypertensionMed +
          0.006208 * systolicBloodPressure * raceValue +
          0.152968 * raceValue * onHypertensionMed +
          -0.000153 * age * systolicBloodPressure +
          0.115232 * raceValue * diabetes +
          -0.092231 * raceValue * smoking +
          0.070498 * raceValue * cholesterolRatio +
          -0.000173 * raceValue * systolicBloodPressure * onHypertensionMed +
          -0.000094 * age * systolicBloodPressure * raceValue
        : -11.679980 +
          0.064200 * age +
          0.482835 * raceValue +
          -0.000061 * systolicBloodPressure2 +
          0.038950 * systolicBloodPressure +
          2.055533 * onHypertensionMed +
          0.842209 * diabetes +
          0.895589 * smoking +
          0.193307 * cholesterolRatio +
          -0.014207 * systolicBloodPressure * onHypertensionMed +
          0.011609 * systolicBloodPressure * raceValue +
          -0.119460 * onHypertensionMed * raceValue +
          0.000025 * age * systolicBloodPressure +
          -0.077214 * raceValue * diabetes +
          -0.226771 * raceValue * smoking +
          -0.117749 * raceValue * cholesterolRatio +
          0.004190 * raceValue * onHypertensionMed * systolicBloodPressure +
          -0.000199 * raceValue * age * systolicBloodPressure;

    return 100 / (1 + Math.exp(-logit));
  };

  
  /**
   * Calcula o risco real do paciente com os valores informados.
   */
  const CVRRealRisk = equationForGetLogit(false);
   /**
   * Calcula o risco ideal, assumindo valores padronizados.
   */
  const CVRIdealRisk = equationForGetLogit(true);

  return {  CVRRealRisk, CVRIdealRisk };
}
