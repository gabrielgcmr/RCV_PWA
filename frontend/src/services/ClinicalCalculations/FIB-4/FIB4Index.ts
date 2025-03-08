import { PatientData } from "../../../interfaces/Interfaces";
import { FIB4Mapper } from "./FIB4Mapper";
import { FIB4Validator } from "./FIB4Validator";
import { FIB4Calculator } from "./FIB4Calculator";

export class FIB4Index {
  static calculateFIB4(patientData: PatientData, getExamValue: (name: string) => number): { fib4: number | null; errors: string[] } {
    // Mapeia os dados do paciente
    console.log(patientData);
    const mappedData = FIB4Mapper.mapPatientData(patientData, getExamValue);
    console.log(mappedData);

    // Valida os dados antes do cálculo
    const validation = FIB4Validator.validate(mappedData);
    if (!validation.isValid) {
      return { fib4: null, errors: validation.errors };
    }

    // Calcula o FIB-4 se os dados forem válidos
    const fib4 = FIB4Calculator.calculate(mappedData);
    return { fib4, errors: [] };
  }
}
