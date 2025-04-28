import { ClinicalPatientData } from "@/types";
import { z } from "zod";

// Interface de resultado para risco cardiovascular
export interface CVRResult {
  CVRRealRisk?: number;
  CVRIdealRisk?: number;
  errors?: string[];
}

// 1) Schema Zod para validação automática dos dados de risco cardiovascular
const CVRSchema = z.object({
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
  systolicBloodPressure: z
    .number()
    .min(60, { message: "A pressão arterial sistólica deve ser ≥ 60 mmHg." })
    .max(250, { message: "A pressão arterial sistólica deve ser ≤ 250 mmHg." }),
  onHypertensionMed: z
    .number()
    .int()
    .refine((v) => v === 0 || v === 1, { message: "onHypertensionMed deve ser 0 ou 1." }),
  smoking: z
    .number()
    .int()
    .refine((v) => v === 0 || v === 1, { message: "smoking deve ser 0 ou 1." }),
  diabetes: z
    .number()
    .int()
    .refine((v) => v === 0 || v === 1, { message: "diabetes deve ser 0 ou 1." }),
  totalCholesterol: z
    .number()
    .min(20, { message: "O colesterol total deve ser ≥ 20 mg/dL." })
    .max(400, { message: "O colesterol total deve ser ≤ 400 mg/dL." }),
  hdl: z
    .number()
    .min(10, { message: "O HDL deve ser ≥ 10 mg/dL." })
    .max(100, { message: "O HDL deve ser ≤ 100 mg/dL." }),
});

// 2) Função calculateCVR seguindo o padrão de cálculo com validação
export default function calculateCVR(
  patient: ClinicalPatientData
): CVRResult {
  // Mapper inline: extrai dados do patient
  const age = Number(patient.identification.age);
  const gender = patient.identification.gender;
  const race = patient.identification.race;
  const systolicBloodPressure = Number(
    patient.exams.find((e) => e.key === "systolicBloodPressure")?.value ?? 0
  );
  const onHypertensionMed = Number(
    patient.exams.find((e) => e.key === "onHypertensionMed")?.value ?? 0
  );
  const smoking = Number(
    patient.exams.find((e) => e.key === "smoking")?.value ?? 0
  );
  const diabetes = Number(
    patient.exams.find((e) => e.key === "diabetes")?.value ?? 0
  );
  const totalCholesterol = Number(
    patient.exams.find((e) => e.key === "totalCholesterol")?.value ?? 0
  );
  const hdl = Number(
    patient.exams.find((e) => e.key === "hdl")?.value ?? 0
  );

  // Validação de entradas
  const validation = CVRSchema.safeParse({
    age,
    gender,
    race,
    systolicBloodPressure,
    onHypertensionMed,
    smoking,
    diabetes,
    totalCholesterol,
    hdl,
  });
  if (!validation.success) {
    return { errors: validation.error.errors.map((e) => e.message) };
  }

  const data = validation.data;

  // Mapeamento do valor da raça
  const raceValue = { white: 0, black: 1, other: 0.00001 }[data.race];

  // Função interna para cálculo do logit
  function equationForGetLogit(ideal: boolean): number {
    const ageVal = data.age;
    const med = ideal ? 0 : data.onHypertensionMed;
    const smoke = ideal ? 0 : data.smoking;
    const diab = ideal ? 0 : data.diabetes;
    const sbp = ideal ? 120 : data.systolicBloodPressure;
    const tc = ideal ? 180 : data.totalCholesterol;
    const hd = ideal ? 50 : data.hdl;

    const sbp2 = sbp * sbp;
    const ratio = tc / hd;
    let logit: number;

    if (data.gender === "female") {
      logit =
        -12.823110 +
        0.106501 * ageVal +
        0.432440 * raceValue +
        0.000056 * sbp2 +
        0.017666 * sbp +
        0.731678 * med +
        0.943970 * diab +
        1.009790 * smoke +
        0.151318 * ratio +
        -0.008580 * ageVal * raceValue +
        -0.003647 * sbp * med +
        0.006208 * sbp * raceValue +
        0.152968 * raceValue * med +
        -0.000153 * ageVal * sbp +
        0.115232 * raceValue * diab +
        -0.092231 * raceValue * smoke +
        0.070498 * raceValue * ratio +
        -0.000173 * raceValue * sbp * med +
        -0.000094 * ageVal * sbp * raceValue;
    } else {
      logit =
        -11.679980 +
        0.064200 * ageVal +
        0.482835 * raceValue +
        -0.000061 * sbp2 +
        0.038950 * sbp +
        2.055533 * med +
        0.842209 * diab +
        0.895589 * smoke +
        0.193307 * ratio +
        -0.014207 * sbp * med +
        0.011609 * sbp * raceValue +
        -0.119460 * med * raceValue +
        0.000025 * ageVal * sbp +
        -0.077214 * raceValue * diab +
        -0.226771 * raceValue * smoke +
        -0.117749 * raceValue * ratio +
        0.004190 * raceValue * med * sbp +
        -0.000199 * raceValue * ageVal * sbp;
    }

    // Converte risco para percentual e formata
    return parseFloat((100 / (1 + Math.exp(-logit))).toFixed(2));
  }

  const CVRRealRisk = equationForGetLogit(false);
  const CVRIdealRisk = equationForGetLogit(true);

  return { CVRRealRisk, CVRIdealRisk };
}
