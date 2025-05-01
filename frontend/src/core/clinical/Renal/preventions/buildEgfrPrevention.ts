// src/core/clinical/preventions/buildEgfrPrevention.ts
import { Gender, Prevention, Race } from "@/types";
import classifyeGFR from "../eGFR/classifier";
import calculateCkdEpi from "../../calculator/ckdEpi";

export function buildEgfrPrevention(
  age: number,
  gender: string,
  race: string,
  serumCreatinine: number,
  examDate: string,
): Prevention{

  const abbreviation   = "TFG";
  const unit           = "mL/min/1.73m²";
    // Gera ID baseado na data (timestamp)
  const id = `${abbreviation}-${new Date(examDate).getTime()}`;

  const { eGFR, errors } = calculateCkdEpi(age, gender as Gender, race as Race, serumCreatinine);
  if (errors || eGFR === undefined) {
    return {
      id,
      name: "Taxa de Filtração Glomerular Estimada",
      abbreviation,
      errors: errors || ["Não foi possível calcular o eGFR"],
      date: examDate,
    };
  }


  const formattedEGFR = parseFloat(eGFR!.toFixed(2));

  if (errors) {
    return {
      id,
      name:         "Taxa de Filtração Glomerular Estimada",
      abbreviation,
      errors,
      date:         examDate,
    };
  }

  const classification = classifyeGFR(formattedEGFR);
  const description    = `${formattedEGFR} ${unit} — ${classification}`;

  return {
    id,
    name:           "Taxa de Filtração Glomerular Estimada",
    abbreviation,
    value:          formattedEGFR,
    unit,
    classification,
    description,
    date:           examDate,
  };
}
