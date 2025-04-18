import CKDEPIData from "./interface";
import { z } from "zod";

const CKDEPIDataSchema = z.object({
  age: z
    .number()
    .min(18, { message: "A idade deve ser ≥ 18 anos." })
    .max(100, { message: "A idade deve ser ≤ 100 anos." }),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: 'O gênero deve ser "male" ou "female".' }),
  }),
  race: z.enum(["white", "black", "other"], {
    errorMap: () => ({ message: "A raça deve ser uma das opções válidas." }),
  }),
  serumCreatinine: z
    .number()
    .min(0.1, { message: "A creatinina sérica deve ser ≥ 0.1 mg/dL." })
    .max(15, { message: "A creatinina sérica deve ser ≤ 15 mg/dL." }),
});

// Valida os dados para CKD-EPI.
export default function validateCKDEPIData(data: CKDEPIData) {
  const result = CKDEPIDataSchema.safeParse(data);
  if (!result.success) {
    return { isValid: false, errors: result.error.errors.map(e => e.message) };
  }
  return { isValid: true, errors: [] };
}
