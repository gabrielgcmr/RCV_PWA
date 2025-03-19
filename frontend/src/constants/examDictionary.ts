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
    UACR: { label: "R. A/C", abbreviation: "R. A/C", category: "RenalProfile", inputType: "input" },
  
    // Glucose Profile
    fastingGlucose: { label: "Glicemia Jejum", abbreviation: "GJ", category: "GlucoseProfile",inputType: "input" },
    hba1c: { label: "HbA1c", abbreviation: "HbA1c", category: "GlucoseProfile",inputType: "input" },

    // Thyroid Profile
    tsh: { label: "TSH", abbreviation: "TSH", category: "ThyroidProfile", inputType: "input" },
    freeT4: { label: "T4 Livre", abbreviation: "T4L", category: "ThyroidProfile", inputType: "input" },
    //totalT4: { label: "T4 Total", abbreviation: "T4T", category: "ThyroidProfile", inputType: "input" },
    //freeT3: { label: "T3 Livre", abbreviation: "T3L", category: "ThyroidProfile", inputType: "input" },
    //totalT3: { label: "T3 Total", abbreviation: "T3T", category: "ThyroidProfile", inputType: "input" },
    //antiTPO: { label: "Anti-TPO", abbreviation: "Anti-TPO", category: "ThyroidProfile", inputType: "input" },
    //antiTG: { label: "Anti-TG", abbreviation: "Anti-TG", category: "ThyroidProfile", inputType: "input" },

    // Vitaminas
    vitaminD: { label: "Vitamina D", abbreviation: "Vit. D", category: "Vitamins", inputType: "input" },
    vitaminB12: { label: "Vitamina B12", abbreviation: "Vit. B12", category: "Vitamins", inputType: "input" },

    // Eletrólitos
    potassium: { label: "Potássio", abbreviation: "K", category: "Electrolytes", inputType: "input" },
    sodium: { label: "Sódio", abbreviation: "Na", category: "Electrolytes", inputType: "input" },
    calcium: { label: "Cálcio", abbreviation: "Ca", category: "Electrolytes", inputType: "input" },
    magnesium: { label: "Magnésio", abbreviation: "Mg", category: "Electrolytes", inputType: "input" },
  
    // CBC
    CBC: { label: "Hemograma", abbreviation: "HMG", category: "CBC",inputType: "select",
      options: [
      { label: "Normal", value: "normal" },
      { label: "Alterado", value: "alterado" }
      ]
    },
    platelets:{label:"Plaquetas (mil)", abbreviation: "Plaq (mil)", category: "CBC", inputType: "input"},

    //  EAS
    urinalysis: { label: "EAS", abbreviation: "EAS", category: "Urinalysis",inputType: "select",
      options: [
        { label: "Normal", value: "normal" },
        { label: "Alterado", value: "alterado" }
      ]
     },
    // pcr E vhs
    pcr:{ label: "PCR", abbreviation: "PCR", category:"Inflamatory", inputType:"input"},
    vhs:{ label: "VHS", abbreviation: "VHS", category:"Inflamatory", inputType:"input"}
    
    //Cinética do Ferro
    
  };