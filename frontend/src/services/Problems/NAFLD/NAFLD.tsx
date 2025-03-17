// DHGNA

import usePatient from "../../../hooks/usePatient";
import { calculateFIB4Index } from "../../ClinicalCalculations/FIB-4/FIB4Index";

function NAFLDIndex(){
  const {patientData, hasProblem} = usePatient()
  const hasNAFLD = hasProblem("NAFLD")
  const {fib4,fib4category} = calculateFIB4Index(patientData)
  if (!hasNAFLD) return null
  if(hasNAFLD) {
    if(!fib4){
      return <li><strong>DHGNA:</strong> presente; FIB4: Não avaliado</li>
    }else{return <li><strong>DHGNA:</strong> presente; {fib4} - {fib4category}</li>} 
  }
}
export default NAFLDIndex
