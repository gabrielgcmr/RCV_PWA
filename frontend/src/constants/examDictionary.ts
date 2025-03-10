export interface ExamDefinition  {
  label: string;
  abbreviation: string;
  category: string;
  inputType: "input" | "select";
  options?: { label: string; value: string }[];
}


export const examDictionary : Record<string, ExamDefinition> = {
    // Lipid Profile
    totalCholesterol: { label: "Colesterol Total", abbreviation: "CT", category: "LipidProfile",inputType: "input"},
    hdl: { label: "HDL", abbreviation: "HDL", category: "LipidProfile",inputType: "input" },
    ldl: { label: "LDL", abbreviation: "LDL", category: "LipidProfile",inputType: "input" },
    triglycerides: { label: "Triglicerídeos", abbreviation: "Trig.", category: "LipidProfile",inputType: "input" },
  
    // Liver Profile
    ast: { label: "AST", abbreviation: "TGO", category: "LiverProfile",inputType: "input" },
    alt: { label: "ALT", abbreviation: "TGP", category: "LiverProfile",inputType: "input" },
    ggt: { label: "GamaGT", abbreviation: "GGT", category: "LiverProfile",inputType: "input" },
    alkalinePhosphatase: { label: "Fosfatase Alcalina", abbreviation: "FA", category: "LiverProfile",inputType: "input" },
  
    // Renal Profile
    creatinine: { label: "Creatinina", abbreviation: "CR", category: "RenalProfile",inputType: "input" },
    urea: { label: "Ureia", abbreviation: "UR", category: "RenalProfile",inputType: "input" },
    uricAcid: { label: "Ácido Úrico", abbreviation: "AU", category: "RenalProfile",inputType: "input" },
  
    // Glucose Profile
    fastingGlucose: { label: "Glicemia Jejum", abbreviation: "GJ", category: "GlucoseProfile",inputType: "input" },
    hba1c: { label: "HbA1c", abbreviation: "HbA1c", category: "GlucoseProfile",inputType: "input" },
  
    // CBC
    CBC: { label: "Hemograma", abbreviation: "Hemograma", category: "CBC",inputType: "select",
      options: [
      { label: "Normal", value: "normal" },
      { label: "Alterado", value: "alterado" }
      ]
    },
    platelets:{label:"Plaquetas (mil)", abbreviation: "Plaq.", category: "CBC", inputType: "input"},

    //  EAS
    urinalysis: { label: "EAS", abbreviation: "EAS", category: "Urinalysis",inputType: "select",
      options: [
        { label: "Normal", value: "normal" },
        { label: "Alterado", value: "alterado" }
      ]
     },
  };