import { Gender, Race } from "@/types";

// 1) Definição dos dados para CKD-EPI
export default interface CKDEPIData {
    age: number;
    gender: Gender
    race: Race 
    serumCreatinine: number;
}

