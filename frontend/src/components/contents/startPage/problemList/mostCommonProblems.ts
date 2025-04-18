//src/constants/mostCommonProblems.ts
import { Problem } from "@/types";

const mostCommonProblems: Problem[] = [
    { key: "hypertension",name: "hypertension", label: "HAS", code: "I10", codeSystem: "CID10", abbreviation: "HAS" },
    { key: "diabetes",name: "diabetes", label: "DM", code: "E11", codeSystem: "CID10", abbreviation: "DM" },
    { key: "tabagism",name: "tabagism", label: "Tabagismo", code: "F17", codeSystem: "CID10", abbreviation: "Tabagismo" },
    { key: "nafld",name: "nafld", label: "DHGNA", code: "K76.0", codeSystem: "CID10", abbreviation: "DHGNA" },
    { key: "ckd",name: "ckd", label: "DRC", code: "N18", codeSystem: "CID10", abbreviation: "DRC" },
  ];
export default mostCommonProblems;