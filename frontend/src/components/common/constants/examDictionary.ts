export const examDictionary: Record<string, { label: string; abbreviation: string; category: string, type:"text" | "number" | "checkbox" | "select"; options?: { label: string; value: string }[] }> = {
  // 🔹 Lipid Profile
  totalCholesterol: { label: "Colesterol Total", abbreviation: "CT", category: "LipidProfile",type: "number"},
  hdl: { label: "HDL", abbreviation: "HDL", category: "LipidProfile",type: "number" },
  ldl: { label: "LDL", abbreviation: "LDL", category: "LipidProfile",type: "number" },
  triglycerides: { label: "Triglicerídeos", abbreviation: "Trig.", category: "LipidProfile",type: "number" },

  // Liver Profile
  ast: { label: "AST (TGO)", abbreviation: "TGO", category: "LiverProfile",type: "number" },
  alt: { label: "ALT (TGP)", abbreviation: "TGP", category: "LiverProfile",type: "number" },
  ggt: { label: "GamaGT", abbreviation: "GGT", category: "LiverProfile",type: "number" },
  alkalinePhosphatase: { label: "Fosfatase Alcalina", abbreviation: "FA", category: "LiverProfile",type: "number" },

  // Renal Profile
  creatinine: { label: "Creatinina", abbreviation: "CR", category: "RenalProfile",type: "number" },
  urea: { label: "Ureia", abbreviation: "UR", category: "RenalProfile",type: "number" },
  uricAcid: { label: "Ácido Úrico", abbreviation: "AU", category: "RenalProfile",type: "number" },

  // Glucose Profile
  fastingGlucose: { label: "Glicemia Jejum", abbreviation: "GJ", category: "GlucoseProfile",type: "number" },
  hba1c: { label: "HbA1c", abbreviation: "HbA1c", category: "GlucoseProfile",type: "number" },

  // Hemogram
  //  EAS
};
