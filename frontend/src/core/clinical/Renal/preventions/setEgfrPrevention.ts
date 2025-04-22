import { ClinicalPatientData } from "@/types";
import { buildEgfrPrevention } from "./buildEgfrPrevention";

export default function setEgfrPrevention(patient: ClinicalPatientData){
    const EgfrPrevention = buildEgfrPrevention(patient)

    patient.preventions.push(EgfrPrevention)

}