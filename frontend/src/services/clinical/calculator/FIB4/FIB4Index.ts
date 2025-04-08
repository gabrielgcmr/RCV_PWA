import mapFIB4Data from "./FIB4Mapper";
import validateFIB4Data from "./FIB4Validator";
import calculateFIB4 from "./FIB4Calculator";
import classifyFIB4 from "./FIB4Classifier";
import { ClinicalPatientData, Prevention } from "../../../../interfaces";

// Calcula o índice FIB-4.
function FIB4Index(patient: ClinicalPatientData): Prevention {
  const mappedData = mapFIB4Data(patient);
  const validation = validateFIB4Data(mappedData);

  if (!validation.isValid) {
    return {
      name: "FIB4",
      abbreviation: "FIB4",
      errors: validation.errors,
      classification: "Não Avaliado",
    };
  }

  const result = calculateFIB4(mappedData);
  const classification = classifyFIB4(result, mappedData.age);

  return {
    name: "FIB4",
    abbreviation: "FIB4",
    value: result,
    unit: "pontos",
    classification: classification,
    description: `Estadiamento de Fibrose estimado: ${classification}`,
    errors: [],
  };
}

export default FIB4Index;
