function CKDStaging (eGFR:number, UACR?:number ): string {
  // Determina a categoria G com base no eGFR
  let gCategory: string;
  if (eGFR >= 90) {
    gCategory = "G1";
  } else if (eGFR >= 60) {
    gCategory = "G2";
  } else if (eGFR >= 45) {
    gCategory = "G3a";
  } else if (eGFR >= 30) {
    gCategory = "G3b";
  } else if (eGFR >= 15) {
    gCategory = "G4";
  } else {
    gCategory = "G5";
  }

  // Determina a categoria A com base no UACR
  let aCategory: string;
  if(UACR){
    if (UACR < 30) {
      aCategory = "A1";
    } else if (UACR <= 300) {
      aCategory = "A2";
    } else {
      aCategory = "A3";
    }
  } else {aCategory = ""}
 

  // Retorna a combinação das categorias G e A
  return `${gCategory}${aCategory}`;
}

export default CKDStaging