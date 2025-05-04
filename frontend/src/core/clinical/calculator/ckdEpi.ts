//src/core/clinical/calcutator
import { Gender, Race } from "@/types";
import { z } from "zod";

interface EGFRResult {
  eGFR?: number;
  errors?: string[];
}

// 1) Schema Zod para validação automática
const ckdEpiSchema = z.object({
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

  
//2) calculadora
export default function calculateCkdEpi (
  age: number,
  gender: Gender,
  race: Race ,
  serumCreatinine: number): EGFRResult{
    
  // Validação
  const validation = ckdEpiSchema.safeParse({ age, gender, race, serumCreatinine });
  if (!validation.success) {
      const errors = validation.error.errors.map((e) => e.message);
      return { errors };
    }

  // calculo
  const kappa = gender === "female" ? 0.7 : 0.9;
  const alpha = gender === "female" ? -0.329 : -0.411;
  const minFactor = Math.min(serumCreatinine / kappa, 1) ** alpha;
  const maxFactor = Math.max(serumCreatinine / kappa, 1) ** -1.209;
  const ageFactor = 0.993 ** age;
  const genderFactor = gender === "female" ? 1.018 : 1;
  const raceFactor = race === "black" ? 1.159 : 1;
  const eGFR = 141 * minFactor * maxFactor * ageFactor * genderFactor * raceFactor
  //retorno da eGFR
  return {eGFR}
}
