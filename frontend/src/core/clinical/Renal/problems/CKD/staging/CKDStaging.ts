// src/core/clinical/CKD/staging/CKDStaging.ts

// Tipos para categorias
export type GCategories = 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5';
export type ACategories = 'A1' | 'A2' | 'A3' | '';

// Função para determinar categoria de Taxa de filtração glomerular
export function determineGFRCategory(eGFR: number): GCategories {
  if (eGFR >= 90) return 'G1';
  if (eGFR >= 60) return 'G2';
  if (eGFR >= 45) return 'G3a';
  if (eGFR >= 30) return 'G3b';
  if (eGFR >= 15) return 'G4';
  return 'G5';
}

// Função para determinar categoria A
export function determineAlbumineCategory(ACR?: number): ACategories {
  if (!ACR) return '';
  if (ACR < 30) return 'A1';
  if (ACR <= 300) return 'A2';
  return 'A3';
}

// Função principal que combina as categorias
export default function CKDStaging(eGFR: number, UACR?: number): string {
  const gCategory = determineGFRCategory(eGFR);
  const aCategory = determineAlbumineCategory(UACR);
  return `${gCategory}${aCategory}`;
}