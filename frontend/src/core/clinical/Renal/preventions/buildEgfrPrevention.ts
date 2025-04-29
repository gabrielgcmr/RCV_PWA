// src/core/clinical/preventions/buildEgfrPrevention.ts
import { Gender, Prevention, Race } from "@/types";
import classifyeGFR from "../eGFR/classifier";
import calculateCkdEpi from "../../calculator/ckdEpi";

export function buildEgfrPrevention(
  age: number,
  gender: string,
  race: string,
  serumCreatinine: number,
  existingCount: number,
  examDate: string
): Prevention {
  const abbreviation   = "TFG";
  const id             = `${abbreviation}-${existingCount + 1}`;
  const unit           = "mL/min/1.73m²";
  const { eGFR, errors } = calculateCkdEpi(age, gender as Gender, race as Race, serumCreatinine);

  if (errors) {
    return {
      id,
      name:         "Taxa de Filtração Glomerular Estimada",
      abbreviation,
      errors,
      date:         examDate,
    };
  }

  const classification = classifyeGFR(eGFR!);
  const description    = `${eGFR} ${unit} — ${classification}`;

  return {
    id,
    name:           "Taxa de Filtração Glomerular Estimada",
    abbreviation,
    value:          eGFR,
    unit,
    classification,
    description,
    date:           examDate,
  };
}
