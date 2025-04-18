//src/constants/mostCommonProblems.ts
import { Problem } from "@/types";

const mostCommonProblems: Problem[] = [
    { key: "BA00", name: "Hipertensão primária", code: "BA00", codeSystem: "CID11", abbreviation: "HP" },
    { key: "5A11", name: "Diabetes Mellitus Tipo 2", code: "5A11", codeSystem: "CID11", abbreviation: "DM2" },
    { key: "QE13", name: "Uso do tabaco",  code: "QE13", codeSystem: "CID11", abbreviation: "Tabagismo" },
    { key: "DB92", name: "Doença hepática gordurosa não alcoolica", code: "DB92", codeSystem: "CID11", abbreviation: "DHGNA" },
    { key: "GB61", name: "Insuficiencia renal Crônica", code: "GB61", codeSystem: "CID11", abbreviation: "DRC" },
  ];
export default mostCommonProblems;

