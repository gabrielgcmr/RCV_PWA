import { ClinicalPatientData } from "@/types";
import { z } from "zod";

// Interface de resultado para CKD-EPI
type EGFRResult = {
  eGFR?: number;
  errors?: string[];
};

// 1) Schema Zod para validação automática
const EGFRSchema = z.object({
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

// 2) Função calculateCkdEpi seguindo o padrão de cálculo com validação
export default function calculateCkdEpi(
  patient: ClinicalPatientData
): EGFRResult {
  // Mapper inline: extrai dados do patient
  const age = Number(patient.identification.age);
  const gender = patient.identification.gender;
  const race = patient.identification.race;
  const serumCreatinine = Number(
    patient.exams.find((e) => e.key === "creatinine")?.value ?? 0
  );

  // Validação de entradas
  const validation = EGFRSchema.safeParse({ age, gender, race, serumCreatinine });
  if (!validation.success) {
    return { errors: validation.error.errors.map((e) => e.message) };
  }

  // Cálculo do eGFR (CKD-EPI)
  const { age: validAge, gender: validGender, race: validRace, serumCreatinine: sc } = validation.data;
  const kappa = validGender === "female" ? 0.7 : 0.9;
  const alpha = validGender === "female" ? -0.329 : -0.411;
  const minFactor = Math.min(sc / kappa, 1) ** alpha;
  const maxFactor = Math.max(sc / kappa, 1) ** -1.209;
  const ageFactor = 0.993 ** validAge;
  const genderFactor = validGender === "female" ? 1.018 : 1;
  const raceFactor = validRace === "black" ? 1.159 : 1;
  const rawEgfR = 141 * minFactor * maxFactor * ageFactor * genderFactor * raceFactor;
  const eGFR = parseFloat(rawEgfR.toFixed(2));

  return { eGFR };
}
